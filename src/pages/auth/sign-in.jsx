import { axiosClient } from "@/data/api/aixos";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



export function SignIn({ form }) {
  const navigate = useNavigate();
  const [input_type, setInput_type] = useState("password")
  const [loading, setLoading] = useState(false);

  const [incorrect_info, setIncorrect_info] = useState(false);
  const [incorrect_info_res, setIncorrect_info_res] = useState("");

  const [email_input_value,setEmail_input_value] = useState("hamza@gmail.com");
  const [password_input_value,setPassword_input_value] = useState("root");
  const login_info = {email:email_input_value, password:password_input_value}

  const handleSubmit = async () => {
    setLoading(true);
    // const data = await axiosClient.post("/login", {email_input_value,password_input_value});
    // console.log(data);
    // await axiosClient.get("/sanctum/csrf-cookie");
    // console.log(axios)
    await axiosClient.post("/login", login_info).then((data) => {
      console.log(data);
      if(data.status === 204){
        navigate("/home");
        setLoading(false);
      }
    }).catch(({response}) => {
      setIncorrect_info(true);
      setIncorrect_info_res(response.data.message)
      console.log(response.data)
      setLoading(false);
    })
  }

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-12">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Admin Sign In</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to Sign In.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto sm:w-80 w-[99%] max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input
              onChange={(e)=>setEmail_input_value(e.target.value)}
              size="lg"
              placeholder="name@mail.com"
              className={
                incorrect_info
                ?"!border-red-400"
                :"!border-t-blue-gray-200 focus:!border-t-gray-900"
              }
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              onChange={(e)=>setPassword_input_value(e.target.value)}
              type={input_type}
              size="lg"
              placeholder="********"
              className={
                incorrect_info
                ?"!border-red-400"
                :"!border-t-blue-gray-200 focus:!border-t-gray-900"
              }
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              />
              {/* <EyeIcon/> */}
          </div>
          {
            incorrect_info&&<p className="text-red-600">{incorrect_info_res}</p>              
          }
          <Button className="mt-6 flex justify-center" fullWidth onClick={()=>handleSubmit()}>
            {loading&&<img className="mr-5" src="https://www.alzheimersresearchuk.org/wp-content/plugins/bbpowerpack/assets/images/spinner.gif" width="15px" height="15px" />}
            Sign In 
          </Button>

          <div className="flex justify-center gap-2 mt-6">
            
            <Typography variant="small" className="font-medium text-gray-900">
              <a href="#">
                Forgot Password
              </a>
            </Typography>
          </div>
        </form>

      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>

    </section>
  );
}

export default SignIn;
