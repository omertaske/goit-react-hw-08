import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../redux/auth/operations';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  // Initial values
  const initialValues = {
    name: 'Adrian Cross',
    email: 'across@mail.com',
    password: 'examplepwd12345',
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values)).unwrap(); // başarıyla dönerse token + user gelecek
      resetForm();
      navigate('/contacts'); // kişisel bölgeye yönlendirme
    } catch (error) {
 console.error('Registration failed:', error);
  const message = error?.message || error?.data?.message || 'Registration failed, please try again.';
  alert(message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Registration Page</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <Field
              name="name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <Field
              name="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration; // <- default export olmalı
