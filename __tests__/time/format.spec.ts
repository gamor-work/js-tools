import { describe } from 'node:test'
import { formatTime } from './../../src/time'

describe('测试格式化时间工具', () => {
  it('测试格式化时间是否可以走通', () => {
    expect(formatTime('单纯的测试', '')).toBe('格式化时间')
  })
})
