/*
Quation 부등식 문제

현재 철수의 통장에는 12,000원, 민지의 통장에는 14,000원이 예금되어 있습니다.
다음 달부터 철수는 매월 1,500원씩 예금을 하고, 
민지는 매월 1,200원씩 예금을 한다고 할 때 
철수가 예금한 금액이 민지가 예금한 금액보다 더 많아지는 것은 몇 개월째부터인지 구하시오.
(개월 수는 반올림한 정수)
*/

/*
  의사 코드로 치환

  const kim = "철수";
  const kim's initial deposit = 12000
  const kim's monthly deposit = 1500

  const lee = "민지";
  const lee's initial deposit = 14000
  const lee's monthly deposit = 1200

  const answer = "kim이 예금한 금액이 lee가 예금한 금액보다 더 많아지는 개월 수"

  ((kim's deposit - lee's deposit) / (kim's monthly deposit - lee's monthly deposit)) => to be answer
*/

class Depositor {
  constructor(
    private readonly name: string,
    readonly totalDeposit: number,
    readonly monthlyDeposit: number
  ) {}

  // 내 예금이 타겟의 누적 예금 금액보다 더 많아지는 개월 수를 계산.
  computeMonthInWhichMyDepositMoreThanTargetDeposit(
    targetTotalDeposit: number,
    targetMonthlyDeposit: number
  ) {
    const differenceOfBothTotalDeposit = targetTotalDeposit - this.totalDeposit;
    const differenceOfBothMonthlyDeposit =
      this.monthlyDeposit - targetMonthlyDeposit;

    const answer =
      differenceOfBothTotalDeposit / differenceOfBothMonthlyDeposit;

    return Math.round(answer);
  }
}

describe("bind scope", () => {
  const kim = new Depositor("kim", 12000, 1500);
  const lee = new Depositor("lee", 14000, 1200);
  const expectedAnswer = 7;

  it("process", () => {
    const answer = kim.computeMonthInWhichMyDepositMoreThanTargetDeposit(
      lee.totalDeposit,
      lee.monthlyDeposit
    );

    expect(answer).toBe(expectedAnswer);
  });
});
