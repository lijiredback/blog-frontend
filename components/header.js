import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="main-title">Lee's Blog</div>
            <div className="sub-title">To Be a Better me</div>
            <style jsx>{`
            header {
                padding: 100px 0 70px;
                width: 900px;
                margin: 0 auto;
                text-align: center;
            }
            .main-title {
                width: 900px;
                font-size: 20px;
                font-weight: 500px;
                margin-bottom: 20px;
            }
            .sub-title {
                width: 900px;
                font-size: 14px;
                color: #909399
            }
        `}
            </style>
        </header>
    )

}

export default Header