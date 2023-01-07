import React, {useState, useEffect} from 'react';
import Filter from '../../component/common/filter/filter'
import Content from  '../../component/common/content/content'
import Table from '../../component/common/table/table'
import UsedNum from './usedNum'
import {Input, Button, Switch} from 'antd'
import { authCodePage } from '../../api/code'

const Code = (props) => {
  /* data */
  const [visible, setVisible] = useState(false)
  const [code, getCode] = useState('')
  const [tableData, setTableData] = useState([])
  /* table */
  const columns = [
    {
      title: '激活码',
      dataIndex: 'authCode',
      key: 'authCode',
    },
    {
      title: '需求版本',
      dataIndex: 'demandVersion',
      key: 'demandVersion',
    },
    {
      title: '归属项目',
      dataIndex: 'projectName',
      key: 'projectName',
    },
    {
      title: '已用次数',
      dataIndex: 'usedNum',
      key: 'usedNum',
    },
    {
      title: '可用次数',
      dataIndex: 'totalNum',
      key: 'totalNum',
      render: (_, record) => (
        <a onClick={ () => changeTotalNum(record) }>{ record.totalNum }</a>
      )
    },
    {
      title: '启动/禁用 ',
      dataIndex: 'status',
      key: 'status',
      width: '120px',
      render: (_, record) => (
        <React.Fragment>
          {
            <Switch onChange={(value) => statusChange(value, record)} />
          }
        </React.Fragment>
      )
    },
  ]

  /* -----------methods------------- */

  /**
   * @method: 查询操作
  * */
  const queryHandle = () => {
    const tOption = {
      authCode: '',
      projectName: '',
      demandVersion: '',
      pageNo: 1,
      pageSize: 10,
    }
    authCodePage(tOption).then(result => {
      if(result) {
        setTableData(result.data.records)
      }
    })
  }
  /**
   * @method: 可用次数
  * */
  const changeTotalNum = (value) => {
    setVisible(true)
  }
  /**
   * @method: 状态操作
  * */
  const statusChange = (value, record) => {
    console.log(value);
    console.log(record);
  }
  const closeHandle = () => {
    setVisible(false)
  }
  const okHandle = () => {
    setVisible(false)
  }

  /* mounted */
  useEffect(() => {
    queryHandle()
  },[])
  return (
    <div>
      <Filter
        filterRight={
          <React.Fragment>
            <Input placeholder={"授权码"} value={code} className='filter_input'/>
            <Input placeholder={"项目名称"} value={code} className='filter_input'/>
            <Input placeholder={"需求版本号"} value={code} className='filter_input'/>
            <Button type={'primary'} onClick={ queryHandle }>查询</Button>
          </React.Fragment>
        }
      />
      <Content>
        <Table columns={columns} dataSource={ tableData } filterTable={true} />
      </Content>
      <UsedNum
        closeHandle={ closeHandle }
        okHandle={ okHandle }
        visible={ visible }
      />
    </div>
  );
};

export default Code;
