import React from 'react';
import { PullToRefresh, ListView, Carousel, SwipeAction, Button } from 'antd-mobile';

class Carou extends React.Component {
  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    initialHeight: 400,
  }
  render() {
    return (
      <Carousel infinite>
        {this.state.data.map(ii => (
          <a key={ii}
            style={{
              display: 'block', height: this.state.initialHeight,
              background: `url(https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png) no-repeat`,
              backgroundSize: 'cover'
            }}
          />
        ))}
      </Carousel>
    );
  }
}

let pageIndex = 0;

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.initData = [];
    for (let i = 0; i < 20; i++) {
      this.initData.push(`r${i}`);
    }
    this.state = {
      dataSource: dataSource.cloneWithRows(this.initData),
      refreshing: false,
      isLoading: false,
      open:false,
    };
  }
  componentDidMount() {
    this.props.changeTitle('Stage 1');
  }
  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event, this.state.dataSource);
    this.setState({ isLoading: true });
    setTimeout(() => {
      for (let index = 0; index < 5; index++) {
        this.initData = this.initData.concat(`onLoadData Data ${pageIndex++}`);
      }
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.initData),
        isLoading: false,
      });
    }, 1000);
  }
  onRefresh = () => {
    console.log('onRefresh');
    setTimeout(() => {
      this.initData = [`onRefresh Data ${pageIndex++}`, ...this.initData];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.initData),
        refreshing: false,
      });
    }, 1000);
  }
  render() {
    console.log(this.props.route, this.props.params, this.props.routeParams);
    console.log(this.props.route.path);
    const renderFooterStyle = { padding: 30, textAlign: 'center' };
    const rowStyle = { padding: 40, backgroundColor: '#f1f1f1' };
    const separatorStyle = { backgroundColor: '#F5F5F9', height: 8 };
    const style = { height: document.body.clientHeight };
    const scrollerOptions = { scrollbars: true };
    const contentContainerStyle = { position: 'relative' }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderHeader={() => <div>
          <div>ListView + PullToRefresh + SwipeAction</div>
          <Button inline onClick={() => {
            this.setState({ refreshing: true });
          }}>refresh data</Button>
        </div>}
        renderFooter={() => (<div style={renderFooterStyle}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={(rowData, sectionID, rowID) => {
          return (
            <div key={rowID}>
              <div>{rowData}</div>
              {Number(rowID) % 2 === 0 ? <Carou /> : <SwipeAction
                autoClose
                right={[
                  {
                    text: 'Cancel',
                    onPress: () => console.log('cancel'),
                    style: { backgroundColor: '#ddd', color: 'white' },
                  },
                  {
                    text: 'Delete',
                    onPress: () => console.log('delete'),
                    style: { backgroundColor: '#F4333C', color: 'white' },
                  },
                ]}
              >
                <div style={rowStyle}>drag left</div>
              </SwipeAction>}
            </div>
          );
        }}
        renderSeparator={(sectionID, rowID) => (
          <div key={`${sectionID}-${rowID}`} style={separatorStyle} />
        )}
        initialListSize={10}
        pageSize={5}
        scrollRenderAheadDistance={200}
        scrollEventThrottle={20}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
        style={style}
        contentContainerStyle={contentContainerStyle}
        scrollerOptions={scrollerOptions}
        pullToRefresh={<PullToRefresh
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        />}
      />
    );
  }
}


