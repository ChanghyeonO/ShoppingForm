import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNavBar from "../SideMenuBar/SideNavBar";

import {
  Container,
  MainTitle,
  ContentArea,
  Content,
  Terms,
  AgreeInputArea,
  AgreeInput,
  AgreeText,
  RemoveButton,
} from "./RemoveAccountContentStyle";

const RemoveAccountContent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleNextClick = () => {
    if (isChecked) {
      alert("회원탈퇴가 완료되었습니다.");
      navigate("/");
    } else {
      alert("약관에 동의해주세요.");
    }
  };

  return (
    <Container>
      <MainTitle>마이페이지</MainTitle>
      <ContentArea>
        <SideNavBar />
        <Content>
          <Terms>
            회원 탈퇴약관
            <br />
            <br /> 제 1 조 (목적) 본 약관은 {"<쇼핑폼>"}(이하 '쇼핑폼')은(는)의
            제반 서비스의 이용조건 및 절차에 관한 사항 및 기타 필요한 사항을
            규정함을 목적으로 합니다.
            <br />제 2 조 (용어의 정의) 본 약관에서 사용하는 용어는 다음과 같이
            정의 합니다.
            <br />
            ①회원 : 기본 회원 정보를 입력하였고, 회사와 서비스 이용계약을
            체결하여 아이디를 부여받은 개인 <br />
            ②아이디(ID) : 회원식별과 회원의 서비스 이용을 위해 회원이 선정하고
            회사가 승인하는 문자와 숫자의 조합
            <br />
            ③비밀번호(Password) : 회원이 통신상의 자신의 비밀을 보호하기 위해
            선정한 문자와 숫자의 조합 개인정보 수집 및 이용
            <br />
            <br /> 제1조(개인정보의 처리 목적) 이하 '쇼핑폼'은(는) 다음의 목적을
            위하여 개인정보를 처리합니다.
            <br />
            처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며
            이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라
            별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다. <br />
            1. 홈페이지 회원가입 및 관리 회원 가입의사 확인, 회원제 서비스
            제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용
            방지, 만14세 미만 아동의 개인정보 처리 시 법정대리인의 동의여부
            확인, 각종 고지·통지 목적으로 개인정보를 처리합니다.
            <br />
            개인정보 제 3자 제공 동의 <br /> <br /> 제 1 조 (목적) 본 약관은
            {"<쇼핑폼>"}(이하 '쇼핑폼')은(는)의 제반 서비스의 이용조건 및 절차에
            관한 사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.
            <br />제 2 조 (용어의 정의) 본 약관에서 사용하는 용어는 다음과 같이
            정의 합니다.
            <br /> ①회원 : 기본 회원 정보를 입력하였고, 회사와 서비스 이용계약을
            체결하여 아이디를 부여받은 개인 <br />
            ②아이디(ID) : 회원식별과 회원의 서비스 이용을 위해 회원이 선정하고
            회사가 승인하는 문자와 숫자의 조합
            <br />
            ③비밀번호(Password) : 회원이 통신상의 자신의 비밀을 보호하기 위해
            선정한 문자와 숫자의 조합
          </Terms>
          <AgreeInputArea>
            <AgreeInput
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <AgreeText>위 약관을 모두 확인했으며 동의합니다.</AgreeText>
          </AgreeInputArea>
          <RemoveButton onClick={handleNextClick}>탈퇴하기</RemoveButton>
        </Content>
      </ContentArea>
    </Container>
  );
};

export default RemoveAccountContent;
