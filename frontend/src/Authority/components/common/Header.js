import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../modules/user";
const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Header = () => {
  const { auth } = useSelector(({ auth }) => ({ auth: auth.auth }));
  console.log("Header1->", auth);
  console.log("Header->", auth.username);
  // if(!user) return;
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
        <HeaderBlock>
          <Wrapper>
            <div className="right">

              <UserInfo>{auth.username}</UserInfo>
              <Button onClick={onLogout} to="/login">
                로그아웃
              </Button>
            </div>
          </Wrapper>
        </HeaderBlock>
        <Spacer />
    </>
  );
};

export default Header;
