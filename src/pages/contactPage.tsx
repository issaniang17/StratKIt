import FormContact from "../components/forms/formContact"
import SubcribeForm from "../components/forms/subcribeForm"
import { ContactElement } from "../constantes/Constante"


const ContactPage = () => {
  return (
    <div className="flex flex-col  justify-center gap-4 md:gap-12 bg-gray-300 bg-linear-to-b from-gray-400 from-5%  to-gray-50 to-5% py-36 md:px-10 px-3">
        <div className="space-y-4">
            <h2 className="text-2xl md:text-5xl font-normal tracking-tight">Contact us</h2>
            <p className="font-light text-lg">We're here to assist you with any inquiries, feedback, or assistance you may <br /> need. Whether you have questions about products, orders, or general <br /> inquiries, our dedicated customer support team is ready to help.</p>
        </div>
        <div className="flex gap-5 flex-col md:gap-8 md:flex-row leading-relaxed">
            <div className="order-1 md:order-2 rounded-2xl bg-gray-200 p-8">
                <h2 className="text-2xl font-light tracking-tight">Drop us a message</h2>
                <p className="opacity-80 font-light text-lg">We're always here to assist you at Etec. Our customer <br /> support team is dedicated to addressing your inquiries.</p>
                <FormContact />
            </div>
            <div className="order-2 md:order-1 space-y-4 md:w-[40%]">
                <div className="flex flex-col justify-between py-5 rounded-2xl bg-gray-200 px-8 md:h-[49%]">
                    <div className="space-y-3">
                        <h2 className="font-light text-2xl">Phone number</h2>
                        <div className="font-light">
                            {ContactElement.telephone1}
                            {ContactElement.telephone2}
                        </div>
                    </div>
                    <div>
                        <p className="font-light opacity-80">Call our team directly. We will provide information, answer technical questions, or schedule an appointment.</p>
                    </div>
                    
                </div>
                <div className="rounded-2xl bg-gray-200 md:h-[49%] px-8 py-5 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-light">E-mail</h2>
                        <p className="font-normal">example@gmail.com</p>
                    </div>
                    <div>
                        <p className="opacity-80 font-light">Use email to provide information about the project. We will respond as soon as possible, providing comprehensive support.</p>
                    </div>
                </div>
            </div>
            
        </div>

        <div className="my-10 py-10 bg-gray-200 rounded-2xl px-8 flex flex-col items-center space-y-3">
            <h2 className="font-normal text-2xl md:text-3xl">Subscribe to our email</h2>
            <p className="font-normal text-2xl md:text-3xl">newsletter and get 15% off</p>
            <p className="font-light text-sm">Be the first to know about the latest in tech trends, exclusive offers, and exciting product launches by subscribing to our newsletter.</p>
            <SubcribeForm/>
        </div>
    </div>
  )
}

export default ContactPage