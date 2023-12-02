"use client"
import { Input, Form } from "../components/shared";
import Button from "../components/shared/Button";
import { FieldValues, useForm } from "react-hook-form";
import useAuth from "@/app/lib/hooks/useAuth";

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
        } as FieldValues
    });
    const { completeSignup } = useAuth();

    function submitUserInfo(data: FieldValues) {
        // TODO: send data to backend
        console.log(data);
        completeSignup(data);
    }

    return (
        <section className="w-full h-screen flex flex-col justify-center items-center">
            <Form onSubmit={handleSubmit(submitUserInfo)} size={"lg"}>
                <h1 className="text-xl bold">We&apos;d love to know more about you!</h1>
                <Input type="text" placeholder="Email" size={"lg"} label={"email"} register={register} />
                <Input type="text" placeholder="First name" size={"lg"} label={"firstName"} register={register} />
                <Input type="text" placeholder="Last name" size={"lg"} label={"lastName"} register={register} />
                <Button type="submit" value="Sign Up" size={"lg"} onClick={function (): void {
                    throw new Error("Function not implemented.");
                } } />
            </Form>
        </section>
    )
};

export default Signup;