'use client'
import React from 'react'
import { useForm} from "react-hook-form";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import {CountrySelectField} from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: {errors, isSubmitting}
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'US',
            investmentGoals: 'Growth',
            riskTolerance: "Medium",
            preferredIndustry: 'Technology'
        },
        mode: "onBlur"
    }, );

    const onSubmit = async (data: SignUpFormData) => {
        try {
            console.log(data)
        }
        catch (e)
        {

        }
    }

    return(
        <>
            <h1 className={"form-title mt-5"}>Sign Up & Personalize</h1>

            <form onSubmit={handleSubmit(onSubmit)} className={"space-y-5"}>
                <InputField
                    name={"fullName"}
                    label={"Full Name"}
                    register={register}
                    placeholder={"Full Name"}
                    error={errors.fullName}
                    validation={{required: 'Full name is required', minLength: 5}}
                />
                <InputField
                    name={"email"}
                    label={"Email"}
                    placeholder={"Email"}
                    register={register}
                    error={errors.email}
                    validation={{required: 'Email is required', pattern: /^\w+@\w+\.\w+$/, message: "Email Address is required" }}
                />
                <InputField
                    name={"password"}
                    label={"Password"}
                    type={"password"}
                    placeholder={"Enter a strong password"}
                    register={register}
                    error={errors.password}
                    validation={{required: 'Password is required', minLength: 8}}
                />

                <CountrySelectField
                    name={"country"}
                    label={"Country"}
                    control={control}
                    error={errors.country}
                    required
                >

                </CountrySelectField>

                <SelectField
                    name={"investmentGoals"}
                    label={"Investment Goals"}
                    placeholder={"Select your investment goal"}
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}

                ></SelectField>

                <SelectField
                    name={"riskTolerance"}
                    label={"Risk Tolerance"}
                    placeholder={"Select your risk tolerance"}
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.investmentGoals}

                ></SelectField>

                <SelectField
                    name={"preferredIndustry"}
                    label={"Preferred Industry"}
                    placeholder={"Select your preferred industry"}
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.investmentGoals}

                ></SelectField>

                <button type={"submit"} disabled={isSubmitting} className={"yellow-btn w-full mt-5"}>
                    {isSubmitting ? "Creating Account" : "Start Investing"}
                </button>


                <FooterLink text={"Already have an account?"} linkText={"Sign In"} href={"/sign-in"}/>

            </form>

        </>
    )
}
export default SignUp
