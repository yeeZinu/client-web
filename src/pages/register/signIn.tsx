import styled from "styled-components";
import { useRouter } from "next/router";
import LottieWrapper from "@/components/common/LottieWrapper";
import LineFlower from "@/assets/lottieJSON/flower-bouquet.json";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

const SignIn = () => {
    const router = useRouter();

    const [userId, setUserId] = useState("");

    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
        setUserId(e.currentTarget.value);
        console.log(userId);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios
            .post("/user/signin", {
                loginId: userId,
            })
            .then((res) => {
                console.log(res.data);
                router.push("/");
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    };

    return (
        <TotalWrapper>
            <LeftLottieWrapper>
                <LottieWrapper lottieData={LineFlower}></LottieWrapper>
            </LeftLottieWrapper>
            <RigthDiv>
                <LoginForm onSubmit={onSubmit}>
                    <div>
                        <LabelForm htmlFor="userId">ID</LabelForm>
                        <br />
                        <InputForm
                            type="text"
                            id="userId"
                            value={userId}
                            onChange={onChangeUserId}
                        />
                    </div>
                    <ChipBtn>로그인</ChipBtn>
                </LoginForm>
            </RigthDiv>
        </TotalWrapper>
    );
};

export default SignIn;

const TotalWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: white;
`;

const LeftLottieWrapper = styled.div`
    width: 50vw;
    height: 100vh;
    background-color: beige;
`;

const RigthDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 50vw;
    height: 100vh;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LabelForm = styled.label`
    font-size: 1.5vw;
`;

const InputForm = styled.input`
    all: unset;
    width: 20vw;
    height: 5vh;
    border: 1px solid #768cff;
    border-radius: 5vw;
    padding-left: 1vw;
`;

const ChipBtn = styled.button`
    all: unset;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 10.1vw;
    height: 5vh;
    margin-top: 5vh;

    border: 1px solid #768cff;
    border-radius: 5vw;

    font-size: 1.5vw;
    text-align: center;
    transition: 0.3s;

    &:hover {
        cursor: pointer;
        background: #8a9eff;
        color: white;
        transition: 0.3s;
    }
`;
