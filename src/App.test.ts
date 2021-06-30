import { sum } from './App'

describe('测试日历util方法', () => {
  // it('输入url链接，返回链接里的参数对象', () => {
  //   const url =
  //     'http://test.epub360.com/v3/manage/book/532pea/preview?-build=1&page_6e736b18f7331b5a7a84766c147bb94120210629141034323=Objective%3D8e69e9fbfcb54ed3978be219a00c3f96%26Activity%3D3f1b95d1ca044432a71ddf224ebe6280';
  //   expect(GetUrlRequest(url)).toEqual({
  //     '-build': expect.any(String),
  //     page_6e736b18f7331b5a7a84766c147bb94120210629141034323: expect.any(String)
  //   });
  // });

  it('测试', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
