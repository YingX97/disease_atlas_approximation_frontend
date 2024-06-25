import React from 'react';
import { Select, Typography, Row, Col, Button, AutoComplete, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const Landing = () => {
  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search triggered");
  };

  return (
    <div style={{ textAlign: 'center', height: '100vh' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '15vh',
        }}
      >
        <Title
          level={2}
          style={{
            margin: 0,
            fontFamily: 'Arial, sans-serif',
            color: '#303131',
            lineHeight: '1.6',
          }}
        >
          Explore Disease Cell Atlas Approximation
        </Title>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '40px',
            padding: '10px',
            borderRadius: '1-0px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            width: '80%',
            maxWidth: '700px',
          }}
        >
          <Row gutter={16} style={{ flex: 1 }}>
            <Col span={9}>
              <div style={{ textAlign: 'left' }}>
                <label style={{ fontWeight: 'bold', paddingLeft:"10px" }}>Search by</label>
                <Select
                  defaultValue="disease"
                  bordered={false}
                  style={{
                    width: '100%',
                    paddingLeft: '0px',
                    fontWeight: 'bold',
                    color: '#B0B0B0',
                    borderBottom: '1px solid #D9D9D9'
                  }}
                >
                  <Option value="disease">Disease</Option>
                  <Option value="treatment">Treatment</Option>
                </Select>
              </div>
            </Col>
            <Col span={11}>
              <div style={{ textAlign: 'left' }}>
                <label style={{ fontWeight: 'bold', paddingLeft:"10px" }}>Keyword</label>
                <AutoComplete
                  bordered={false}
                  style={{
                    width: '100%',
                    paddingLeft: '0px',
                    fontWeight: 'bold',
                    color: '#B0B0B0',
                    borderBottom: '1px solid #D9D9D9'
                  }}
                />
              </div>
            </Col>
            <Col span={2} offset={1}>
              <Button
                type="primary"
                shape="circle"
                icon={<SearchOutlined />}
                size="large"
                style={{ backgroundColor: '#43a047' }}
                onClick={handleSearch}
              />
            </Col>
          </Row>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Landing;
