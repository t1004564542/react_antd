import React, {useState, useEffect} from 'react';
import { Table } from "antd";

const TableComp = (props) => {
  return (
    <div>
      <Table columns={props.columns} dataSource={props.dataSource} scroll={{ y : 900 }} />
    </div>
  );
};

export default TableComp;
