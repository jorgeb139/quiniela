// import { useState } from "react"
// import { useRouter } from "next/router"

//
//   const router = useRouter()

//   const [form, setForm] = useState({
//     email: formModal.email,
//     password: formModal.password,
//   })

//   const [message, setMessage] = useState([])

//   const handleChange = (e) => {
//     const { value, name } = e.target
//     setForm({
//       ...form,
//       [name]: value,
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     postData(form)
//   }

//   const fetchUrl =
//     method === "POST"
//       ? "https://jsonplaceholder.typicode.com/posts"
//       : "https://my-json-server.typicode.com/jorgeb139/lab_arch/users"
//   const textButton = method === "POST" ? "Registrarme" : "Iniciar sesión"

//   const postData = async (form) => {
//     try {
//       console.log(form)
//       const response = await fetch(
//         { fetchUrl },
//         {
//           method: "POST",
//           headers: {
//             "Content-type": "application-json",
//           },
//           body: JSON.stringify(form),
//         }
//       )

//       const data = await response.json()
//       console.log(data)

//       if (!data.success) {
//         for (const key in data.error.errors) {
//           const error = data.error.errors[key]
//           setMessage((oldMessage) => [
//             ...oldMessage,
//             { message: error.message },
//           ])
//         }
//         console.log(message)
//       } else {
//         router.push("/")
//       }
//     } catch {}
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           className="form-control"
//           type="email"
//           placeholder="Correo electrónico"
//           autoComplete="on"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//         />
//         <input
//           className="form-control"
//           type="password"
//           placeholder="Contraseña"
//           autoComplete="on"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//         />
//         <button type="submit"> {textButton} </button>
//       </form>
//     </>
//   )
// }

// import { Dialog } from "@headlessui/react"
// import { useRecoilState } from "recoil"
// import { openLoginState } from "../../atoms/loginModalAtom"

// export default function LoginModal() {
//   const [isOpen, setIsOpen] = useRecoilState(openLoginState)

//   return (
//     <>
//       <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="dialog">
//         <div className="dialog_modal">
//           <div className="modal">
//             <Dialog.Panel className="dialog_panel">
//               <Dialog.Title>Deactivate account</Dialog.Title>
//               <Dialog.Description>
//                 This will permanently deactivate your account
//               </Dialog.Description>

//               <p>
//                 Are you sure you want to deactivate your account? All of your
//                 data will be permanently removed. This action cannot be undone.
//               </p>

//               <button onClick={() => setIsOpen(false)}>Deactivate</button>
//               <button onClick={() => setIsOpen(false)}>Cancel</button>
//             </Dialog.Panel>
//           </div>
//         </div>
//       </Dialog>

//       <style jsx>{`
//         .dialog {
//           position: relative;
//           z-index: 10;
//         }
//         .dialog_modal {
//           position: fixed;
//           height: 50%;
//           width: 50%;
//           top: 20%;
//           right: 20%;
//           bottom: 0px;
//           left: 25%;
//           overflow-y: auto;
//           background-color: gray;
//         }
//         .modal {
//           display: flex;
//           min-height: 100%;
//           align-items: center;
//           justify-content: center;
//           padding: 1rem;
//           text-align: center;
//         }
//         .dialog_panel {
//           width: 100%;
//           max-width: 28rem;
//           --tw-translate-x: 0;
//           --tw-translate-y: 0;
//           --tw-rotate: 0;
//           --tw-skew-x: 0;
//           --tw-skew-y: 0;
//           --tw-scale-x: 1;
//           --tw-scale-y: 1;
//           transform: translateX(var(--tw-translate-x))
//             translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
//             skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
//             scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
//           overflow: hidden;
//           border-radius: 1rem;
//           background-color: gray;
//           padding: 1.5rem;
//           text-align: left;
//           vertical-align: middle;
//           box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
//             0 8px 10px -6px rgb(0 0 0 / 0.1);
//           transition-property: all;
//           transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//           transition-duration: 150ms;
//         }
//       `}</style>
//     </>
//   )
// }

// import { useRecoilState } from "recoil"
// import { openLoginState } from "../../atoms/loginModalAtom"
// import * as Dialog from "@radix-ui/r

// import * as dialog from "@zag-js/dialog"
// import { Portal } from "@reach/portal"
// import { useMachine, normalizeProps } from "@zag-js/react"
// import { colors } from "../../styles/theme"

// export default function LoginModal() {
//   const [state, send] = useMachine(dialog.machine({ id: "1" }))

//   const api = dialog.connect(state, send, normalizeProps)

//   return (
//     <>
//       <button {...api.triggerProps} className="button">
//         Open Dialog
//       </button>
//       {api.isOpen && (
//         <Portal>
//           <div {...api.backdropProps} />
//           <div {...api.underlayProps}>
//             <div {...api.contentProps}>
//               <h2 {...api.titleProps}>Edit profile</h2>
//               <p {...api.descriptionProps}>
//                 Make changes to your profile here. Click save when you are done.
//               </p>
//               <div>
//                 <input placeholder="Enter name..." />
//                 <button>Save</button>
//               </div>
//               <button {...api.closeButtonProps}>Close</button>
//             </div>
//           </div>
//         </Portal>
//       )}

//       <style jsx>{`
//         .button {
//           align-items: center;
//           background: ${colors.black};
//           border: none;
//           cursor: pointer;
//           color: ${colors.white};
//           display: flex;
//           border-radius: 9999px;
//           font-size: 16px;
//           font-weight: 600;
//           padding: 10px 32px;
//           transition: opacity 0.3s ease;
//         }

//         button > :global(svg) {
//           margin-right: 10px;
//         }

//         button:hover {
//           opacity: 0.7;
//         }
//       `}</style>
//     </>
//   )
// }

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import EmailLogo from "../../components/Icons/Email"
import Button from "../Button"

export default function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = (event, network) => {
    onOpen()
    // loginWithGoogle()
    //   .then(setUser)
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }

  return (
    <>
      <Button
        id="EmailButton"
        onClick={(event) => handleClick(event, "Facebook")}
      >
        <EmailLogo height="24" width="24" />
        Email
      </Button>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Lorem ipsum</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
