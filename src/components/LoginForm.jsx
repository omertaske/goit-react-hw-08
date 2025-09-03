import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../redux/auth/operations';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email('Geçersiz email').required('Email gerekli'),
    password: Yup.string().required('Şifre gerekli'),
  });

  const initialValues = { email: '', password: '' };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(login(values)).unwrap();
      toast.success('Giriş başarılı!');
      resetForm();
    } catch (err) {
      const message = err?.message || err?.data?.message || 'Hata oluştu';
      toast.error(message);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto mt-10 p-8 bg-gradient-to-r from-blue-100 to-blue-200 shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Login</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <Field
              name="email"
              type="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 mt-1 text-sm" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <Field
              name="password"
              type="password"
              placeholder="Şifreniz"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 mt-1 text-sm" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 font-semibold rounded-lg transition-all shadow-md"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
