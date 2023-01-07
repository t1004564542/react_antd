import React, { useState, useEffect } from "react";
import Filter from '../../component/common/filter/filter'
import Content from  '../../component/common/content/content'
import Table from '../../component/common/table/table'
import LogDetail from "./logdetail";
import { loggerEvents, loggerPage } from '../../api/log'
import { DatePicker, Select, Button, Typography} from "antd";

const { RangePicker } = DatePicker
const { Option } = Select
function Log(props) {
  const [ visible, setVisible] = useState(false)
  const [ detail, setDetail ] = useState({})
  const [ dataSource, setDateSource] = useState([])
  /* 变量 */
  const selectList = [
    { id: 'logSelect1' , value: '数据1'},
    { id: 'logSelect2' , value: '数据2'}
  ]
  /* 父组件方法 */
  const detailHandle = (_, record) => {
    setDetail(record)
    setVisible(true)
  }
  /* table */
  const columns = [
    {
      title: '时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '管理员',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '模块',
      dataIndex: 'moduleName',
      key: 'moduleName',
    },
    {
      title: '操作',
      dataIndex: 'eventName',
      key: 'eventName',
    },
    {
      title: '详情',
      dataIndex: 'opera',
      key: 'opera',
      width: '120px',
      render: (_, record) => (
        <React.Fragment>
          {
            <Typography.Link onClick={() => detailHandle(_, record)}>详情</Typography.Link>
          }
        </React.Fragment>
        )
    },
  ]
  /* 子组件回调方法 */
  useEffect(() => {
    loggerEvents().then(res => {
      console.log(res);
    })
    const tOption = {
      endTime: "2022-04-14",
      eventCode: "",
      pageNo: 1,
      pageSize: 10,
      startTime: "2022-04-01",
    }
    loggerPage(tOption).then(result => {
      setDateSource(result.data.records)
    })
  }, [])
  return (
    <div>
      <Filter
        filterRight = {
          <div>
            <RangePicker className='filter_datePick' />
            <Select className='filter_input' placeholder='请选择' allowClear={ true }>
              {
                selectList.map(item => {
                  return <Option value={item.value} key={item.id}>{item.value}</Option>
                })
              }
            </Select>
            <Button type="primary">查 询</Button>
          </div>
        }
      >
      </Filter>
      <Content>
        <Table columns={columns} dataSource={dataSource} filterTable={true} />
      </Content>
      <LogDetail
        visible={ visible }
        detail={ detail }
        closeHandle={ () => { setVisible(false) }} okHandle={() => { setVisible(false) }}
      />
    </div>
  )
}
export default Log
