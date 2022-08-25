import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const AboutMe = () => {
    const [activeItem, setActiveItem] = useState('edu');
    const navigate = useNavigate();
    const intro = useRef([
        { label: '이름', value: '이서주' },
        { label: '생일', value: '01.12.17 (22세/만 20세)' },
        { label: '학력', value: '대학졸업예정' },
        { label: 'e-mail', value: 'teren621@gmail.com' },
        { label: 'tech-blog', value: 'potential-coding.tistory.com' },
    ]);

    const ButtonListRef = useRef([
        { label: 'edu', value: '학력' },
        { label: 'work', value: '경력사항' },
        { label: 'lang', value: '사용언어' },
        { label: 'certi', value: '자격증' },
    ]);

    const handleClick = useCallback(
        label => {
            setActiveItem(label);
            navigate(`/seojoo/about/${label}`);
        },
        [navigate]
    );

    return (
        <Layout>
            <Default>
                <Card>
                    <Image src={process.env.PUBLIC_URL + '/image/hello.png'} alt="noImage" draggable={false} />
                    <FlexTable width={'100%'}>
                        {intro.current.map((item, index) => {
                            return (
                                <FlexItem>
                                    <div className="label">{item.label}</div>
                                    <div className="value">{item.value}</div>
                                </FlexItem>
                            );
                        })}
                    </FlexTable>
                </Card>
                <Card>
                    <ButtonArea>
                        {ButtonListRef.current.map(item => {
                            return (
                                <Button isActive={activeItem === item.label} onClick={() => handleClick(item.label)}>
                                    {item.value}
                                </Button>
                            );
                        })}
                    </ButtonArea>
                </Card>
                <Card>
                    <Outlet />
                </Card>
            </Default>
        </Layout>
    );
};

const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    height: 80px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const Button = styled.div`
    padding: 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    white-space: pre;
    cursor: pointer;
    font-size: 2rem;

    ${({ isActive }) =>
        isActive &&
        css`
            background-color: darkgray;
        `}

    &:hover {
        transition: 0.3s all;
        background-color: gray;
        opacity: 30%;
    }
`;

const Image = styled.img`
    width: 300px;
    position: absolute;
    left: -132px;
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; z-index: 9999}
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; z-index: -1; pointer-events: none;}
`;

const slideUp = keyframes`
  from { transform: translateY(12.5rem); }
  to { transform: translateY(0); }
`;

const slideDown = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(12.5rem); }
`;

export const FlexTable = styled.div`
    width: ${({ width }) => width};
    font-size: 2rem;
    background: white;
    padding: 10px 1rem;
    padding-left: 140px;
    font-size: 1.7rem;
    gap: 10px;
    display: flex;
    flex-direction: column;
`;

const FlexItem = styled.div`
    display: flex;
    gap: 30px;
    padding: 5px 0px;
    & div {
    }
`;

const Layout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    user-select: none;
    background: radial-gradient(#769eb0c2, #0e446b00);
    font-family: 'NanumSquare';
`;

const Card = styled.div`
    display: flex;
    position: relative;
    width: 70%;
    align-items: center;
`;

const Default = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    max-width: 1333px;
    padding: 0 20px;
    margin: 0 auto;
    width: 100%;
    gap: 2.3rem;
`;

export default React.memo(AboutMe);
