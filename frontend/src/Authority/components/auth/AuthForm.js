import './AuthForm.css';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const textMap = {
  login: '로그인',
  register: '가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <>
      <div className="AuthFormBlock">
        <div className="logo-area">
          <Link to="/">INSTAGRAM</Link>
        </div>
        {type === 'register' && (
          <h2>친구들의 사진과 동영상을 보려면 가입하세요.</h2>
        )}
        <form onSubmit={onSubmit}>
          <input
            className="StyledInput"
            autoComplete="username"
            name="username"
            placeholder="사용자 이름"
            onChange={onChange}
            value={form.username}
          />
          {type === 'register' && (
            <input
              className="StyledInput"
              autoComplete="uname"
              name="uname"
              placeholder="성명"
              onChange={onChange}
              value={form.name}
            />
          )}
          <input
            className="StyledInput"
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={form.password}
          />
          {type === 'register' && (
            <input
              className="StyledInput"
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            />
          )}
          {/* 에러를 보여 줌 */}
          {error && <div className="ErrorMessage">{error}</div>}

          <Button className="Button">{text}</Button>
        </form>
      </div>

      {/* 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌 */}
      <div className="Switch">
        {type === 'login' ? (
          <h3>
            계정이 없으신가요?{' '}
            <Link to="/register">
              <span className="blue">가입하기</span>
            </Link>
          </h3>
        ) : (
          <h3>
            계정이 있으신가요?{' '}
            <Link to="/login">
              <span className="blue">로그인</span>
            </Link>
          </h3>
        )}
      </div>
      <div className={'else3'}>
        <span>Meta </span>
        <span>소개 </span>
        <span>블로그 </span>
        <span>채용 정보 </span>
        <span>도움말 </span>
        <span>API </span>
        <span>개인정보처리방침 </span>
        <span>약관 </span>
        <span>인기 계정 </span>
        <span>해시태그 </span>
        <span>위치 </span>
        <span>Instagram Life </span>
        <span>연락처 업로드 &amp; 비사용자</span>
      </div>
      <div className={'else4'}>
        <span>댄스 </span>
        <span>식음료 </span>
        <span>집 및 정원 </span>
        <span>음악 </span>
        <span>시각 예술 </span>
      </div>
      <div className={'else2'}>© 2022 Instagram from Meta</div>
    </>
  );
};

export default AuthForm;
