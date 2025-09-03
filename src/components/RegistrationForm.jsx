import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required('Ad gerekli'),
    email: Yup.string().email('Geçersiz email').required('Email gerekli'),
    password: Yup.string().min(8, 'En az 8 karakter').required('Şifre gerekli'),
  });

  const initialValues = { name: '', email: '', password: '' };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values)).unwrap();
      toast.success('Kayıt başarılı!');
      resetForm();
      navigate('/contacts');
    } catch (err) {
      const message = err?.message || err?.data?.message || 'Kayıt başarısız';
      toast.error(message);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto mt-10 p-8 bg-gradient-to-r from-green-100 to-green-200 shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Register</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <Field
              name="name"
              type="text"
              placeholder="Adınız"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 mt-1 text-sm" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <Field
              name="email"
              type="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 mt-1 text-sm" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <Field
              name="password"
              type="password"
              placeholder="Şifreniz"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 mt-1 text-sm" />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 font-semibold rounded-lg transition-all shadow-md"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
