import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginModal({ formModal, method = "POST" }) {

  const router = useRouter();

  const [form, setForm] = useState({
    email: formModal.email,
    password: formModal.password,
  });

  const [message, setMessage] = useState([]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
  };

  const fetchUrl = method === 'POST' ? 'https://jsonplaceholder.typicode.com/posts' : 'https://my-json-server.typicode.com/jorgeb139/lab_arch/user'
  const textButton = method === 'POST' ? 'Registrarme' : 'Iniciar sesión'

  const postData = async (form) => {
    try {
      console.log(form);
      const response = await fetch({fetchUrl}, {
          method: 'POST',
          headers: {
            "Content-type": "application-json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();
      console.log(data);

      if(!data.success){
        for (const key in data.error.errors) {
          let error = data.error.errors[key];
          setMessage((oldMessage) => [
            ...oldMessage,
            { message: error.message },
          ]);
        }
        console.log(message);
      }else {
        router.push("/")
      }
    }catch {
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="email"
          placeholder="Correo electrónico"
          autoComplete="on"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="password"
          placeholder="Contraseña"
          autoComplete="on"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <button type = "submit"> { textButton } </button>
      </form>
    </>
  );
}
