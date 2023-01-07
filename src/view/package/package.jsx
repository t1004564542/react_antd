import React, {useState, useEffect} from 'react';
import Filter from "../../component/common/filter/filter";
import {Button, Input, Typography} from "antd";
import Content from "../../component/common/content/content";
import Table from "../../component/common/table/table";

const Package = (props) => {
  const [tOption, setOption] = useState( {name: '', describe: '', versions: ''})
  const [tableData, setTableData] = useState([])
  const queryHandle = () => {}

  const detailHandle = () => {}

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
  return (
    <div>
      <Filter
        filterRight={
          <React.Fragment>
            <Input placeholder="项目名称" value={tOption.name} className='filter_input'/>
            <Input placeholder="项目名称" value={tOption.describe} className='filter_input'/>
            <Input placeholder="需求版本号" value={tOption.versions} className='filter_input'/>
            <Button type='primary' onClick={ queryHandle }>查询</Button>
          </React.Fragment>
        }
      />
      <Content>
        <Table columns={columns} dataSource={ tableData } filterTable={true} />
      </Content>
    </div>
  );
};

export default Package;
