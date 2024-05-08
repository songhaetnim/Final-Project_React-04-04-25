import React from 'react';

function ProductInquiryList() {
  return (
    <div id="prod-inquiry-list" className="prod-tab">
      <div className="prod-inquiry-list">
        <div className="clearFix">
          <h4 className="prod-inquiry-list__title">상품문의</h4>
          <a className="prod-inquiry-list__write-btn" href="javascript:;">문의하기</a>
        </div>
        <div className="prod-inquiry-list__emphasis">
          <ul>
            <li>구매한 상품의 <em>취소/반품은 마이 구매내역에서 신청</em> 가능합니다.</li>
            <li>상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은 처리되지 않습니다.</li>
            <li><em>가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련 없는 문의는 고객센터 내 1:1 문의하기</em>를 이용해주세요.</li>
            <li><em>"해당 상품 자체"와 관계없는 글, 양도, 광고성, 욕설, 비방, 도배 등의 글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수 있습니다.</em></li>
            <li>공개 게시판이므로 전화번호, 메일 주소 등 고객님의 소중한 개인정보는 절대 남기지 말아주세요.</li>
          </ul>
        </div>
        <div className="prod-inquiry-list__container">
          <table className="prod-inquiry-items">
            <thead>
              <tr>
                <th>질문</th>
                <th>답변</th>
              </tr>
            </thead>
            <tbody>
              <tr className="prod-inquiry-item">
                <td>
                  <div className="prod-inquiry-item__question">
                    <em className="prod-inquiry-item__label">질문</em>
                    <div className="prod-inquiry-item__wrap">
                      <strong className="prod-inquiry-item__author"></strong>
                      <div className="prod-inquiry-item__selected-option">FREE(21.5 x 9 cm) | 1개 쿠팡</div>
                      <div className="prod-inquiry-item__content">공홈에 에이더 TFCC 손목보호대 T4 동일제품맞나요?</div>
                      <div className="prod-inquiry-item__time">2024/01/28 15:55:19</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="prod-inquiry-item__answer">
                    <div className="prod-inquiry-item__reply">
                      <i className="prod_inquiry-item__reply__icon"></i>
                      <em className="prod-inquiry-item__reply__label">답변</em>
                      <div className="prod-inquiry-item__reply__wrap">
                        <strong className="prod-inquiry-item__reply__author">[COUPANG]</strong>
                        <div className="prod-inquiry-item__reply__content">고객님의 문의 사항은 공급업체(제조사) 확인 후에 답변 드릴 수 있습니다.<br />
                          연결 지연 또는 공급업체 휴무로 연결 불가한 경우 답변에 시간이 소요될 수 있음을 양해 부탁 드립니다.<br />
                          평일 기준 공급업체(제조사)에 확인 후 빠른 답변 드릴 수 있도록 노력하겠습니다.<br />
                          <br />
                          감사합니다.</div>
                        <div className="prod-inquiry-item__reply__time">2024/01/28 16:48:06</div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              {/* 다른 상품 문의 아이템들 */}
            </tbody>
          </table>
          <div className="prod-inquiry-list__expand">
            <button className="prod-inquiry-list__expand__btn" type="button">
              전체보기 <i className="icon-prod-inquiry-more"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="prod-report">
        <p className="prod-report__text">판매 부적격 상품 또는 허위과장광고 및 지식재산권을 침해하는 상품의 경우 신고하여 주시기 바랍니다.</p>
        <a href="javascript:;" className="prod-report__button" id="productReport" title="신고하기">신고하기</a>
      </div>
    </div>
  );
}

export default ProductInquiryList;
