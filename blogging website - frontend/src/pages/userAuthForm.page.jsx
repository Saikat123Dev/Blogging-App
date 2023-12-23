import InputBox from "../components/input.component";

const UserAuthForm = ({type}) => {
    return (
       <section className="h-cover flex items-center justify-center ">
        <form className="w-[80%] max-w-[400px]">
            <h className="text-4xl font-gelasio capatalize text-center mb-24">
                {type=='sign-in'? "Welcome Back" : "Join Us Today"}
            </h>

            {
                type != "sign-in"? 
                <InputBox/>
                : ""
            }
        </form>

       </section>
    )
}

export default UserAuthForm;