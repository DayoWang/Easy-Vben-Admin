import { Page } from '/@/api/model/pageModel';
import { defHttp } from '/@/utils/http/axios';
import { ActivitiHistoryTaskInstance } from '/@/api/activiti/model/activitiHistoryTaskInstanceModel';

// base url
const BASE_URL = '/api/auth/activiti/history/task-instance';

/**
 * 我发起的
 *
 * @param params 查询条件
 * @param pager 分页
 */
export function selectMy(
  params: ActivitiHistoryTaskInstance,
  pager: Page<ActivitiHistoryTaskInstance>,
) {
  return defHttp.get<Page<ActivitiHistoryTaskInstance>>({
    url: `${BASE_URL}/my`,
    params: Object.assign(params, pager),
  });
}

/**
 * 我办理的
 *
 * @param params 查询条件
 * @param pager 分页
 */
export function selectParticipate(
  params: ActivitiHistoryTaskInstance,
  pager: Page<ActivitiHistoryTaskInstance>,
) {
  return defHttp.get<Page<ActivitiHistoryTaskInstance>>({
    url: `${BASE_URL}/participate`,
    params: Object.assign(params, pager),
  });
}

/**
 * 所有任务
 *
 * @param params 查询条件
 * @param pager 分页
 */
export function selectAll(
  params: ActivitiHistoryTaskInstance,
  pager: Page<ActivitiHistoryTaskInstance>,
) {
  return defHttp.get<Page<ActivitiHistoryTaskInstance>>({
    url: `${BASE_URL}/all`,
    params: Object.assign(params, pager),
  });
}
