import request from '@/utils/request'

/**
 * 获取累计收益明细
 */
export const getChartTrend = () => {
  return request({
    url: '/chart/trend'
  })
}
