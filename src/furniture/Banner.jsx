import React from 'react';

const Banner = () => {
  const handleClick = () => {
    // 클릭 시 페이지 이동
    window.location.href = '/product/list.html?cate_no=137';
  };

  return (
    <div className="banner_trans" style={{ fontFamily: 'Arial' }} onClick={handleClick}>
      <div className="title" style={{ fontSize: '1.5em', color: '#ffffcc' }}>
        시선을 사로잡는 센스있는 오피스
      </div>
      <div className="content" style={{ fontSize: '1.1em', color: '#fff' }}>
        품격이 느껴지는 특별한 공간에 어울리는 <br />
        세련된 사무용소파 시리즈- <br />
      </div>
    </div>
  );
};

export default Banner;















