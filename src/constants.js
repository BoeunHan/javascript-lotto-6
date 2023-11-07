export const MESSAGE = Object.freeze({
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  WINNING_STATISTICS: '당첨 통계',
  DASHES: '---',
  PURCHASE_COUNT: (cnt) => `${cnt}개를 구매했습니다.`,
  MATCH_NUMBERS_COUNT: (matchCnt, winnings, lottoCnt) =>
    `${matchCnt}개 일치 (${winnings}원) - ${lottoCnt}개`,
  TOTAL_RATE_OF_RETURN: (total) => `총 수익률은 ${total}%입니다.`,
});

export const ERROR = Object.freeze({
  BLANK_INPUT: '입력값이 없습니다.',
  NOT_A_NUMBER: '숫자여야 합니다.',
  NOT_A_NATURAL_NUMBER: '1 이상의 숫자여야 합니다.',
  NOT_DIVIDED_BY_THOUSAND: '숫자가 1000 단위여야 합니다.',
  NOT_SIX_NUMBERS: '로또 번호는 6개여야 합니다.',
  ALREADY_SELECTED: '당첨 번호에 존재하는 숫자입니다.',
  OUT_OF_RANGE: (start, end) => `로또 번호는 ${start}부터 ${end} 사이의 숫자여야 합니다.`,
});

export const LOTTERY = Object.freeze({
  MIN_NUM: 1,
  MAX_NUM: 45,
  NUM_COUNT: 6,
  PRICE: 1000,
  FIRST_CNT: 6,
  SECOND_CNT: 5,
  THIRD_CNT: 5,
  FOURTH_CNT: 4,
  FIFTH_CNT: 3,
  FIRST_WINNINGS: 2000000000,
  SECOND_WINNINGS: 30000000,
  THIRD_WINNINGS: 1500000,
  FOURTH_WINNINGS: 50000,
  FIFTH_WINNINGS: 5000,
  DEFAULT_WINNINGS: 0,
});

export const LOTTO_WINNINGS = (matchCnt, hasBonus) => {
  const result = { label: `${matchCnt}개 일치`, winnings: LOTTERY.DEFAULT_WINNINGS };

  if (matchCnt === LOTTERY.FIFTH_CNT) return { ...result, winnings: LOTTERY.FIFTH_WINNINGS };
  if (matchCnt === LOTTERY.FOURTH_CNT) return { ...result, winnings: LOTTERY.FOURTH_WINNINGS };
  if (matchCnt === LOTTERY.THIRD_CNT) return { ...result, winnings: LOTTERY.THIRD_WINNINGS };
  if (matchCnt === LOTTERY.SECOND_CNT && hasBonus)
    return { label: result.label + ', 보너스 볼 일치', winnings: LOTTERY.SECOND_WINNINGS };
  if (matchCnt === LOTTERY.FIRST_CNT) return { ...result, winnings: LOTTERY.FIRST_WINNINGS };
  return result;
};
