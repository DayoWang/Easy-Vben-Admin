import { BasicColumn, FormSchema } from '/@/components/Table';

/**
 * 查询条件
 */
export const searchFormSchema: FormSchema[] = [
  {
    field: 'sysKey',
    label: 'key',
    component: 'Input',
  },
  {
    field: 'value',
    label: 'value',
    component: 'Input',
  },
];

// 表格列数据
export const columns: BasicColumn[] = [
  {
    title: 'key',
    dataIndex: 'sysKey',
    sorter: true,
    fixed: 'left',
    width: 150,
  },
  {
    title: 'value',
    dataIndex: 'value',
    sorter: true,
    width: 200,
  },
  {
    title: '类型',
    dataIndex: 'type',
    sorter: true,
    width: 80,
    format: 'dict|dataType',
    filters: 'dict|dataType',
  },
  {
    title: '系统',
    dataIndex: 'sys',
    sorter: true,
    width: 100,
    auth: 'sys:admin',
    format: 'dict|whether',
    filters: 'dict|whether',
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    sorter: true,
    width: 260,
  },
  {
    title: '编辑人',
    dataIndex: 'editUser',
    sorter: true,
    width: 120,
  },
  {
    title: '编辑时间',
    dataIndex: 'editDate',
    sorter: true,
    width: 160,
    format: 'date|YYYY-MM-DD HH:mm',
  },
];
