import * as VTable from '../../src';
const PivotTable = VTable.PivotTable;
const CONTAINER_ID = 'vTable';
export function createTable(el: any, v: any) {
  const rowTree = [
    {
      dimensionKey: '地区',
      value: '东北',
      children: [
        {
          dimensionKey: '省/自治区',
          value: '吉林'
        },
        {
          dimensionKey: '省/自治区',
          value: '辽宁'
        },
        {
          dimensionKey: '省/自治区',
          value: '黑龙江'
        }
      ]
    },
    {
      dimensionKey: '地区',
      value: '中南',
      children: [
        {
          dimensionKey: '省/自治区',
          value: '广东'
        },
        {
          dimensionKey: '省/自治区',
          value: '广西'
        },
        {
          dimensionKey: '省/自治区',
          value: '河南'
        },
        {
          dimensionKey: '省/自治区',
          value: '海南'
        },
        {
          dimensionKey: '省/自治区',
          value: '湖北'
        },
        {
          dimensionKey: '省/自治区',
          value: '湖南'
        }
      ]
    },
    {
      dimensionKey: '地区',
      value: '华东',
      children: [
        {
          dimensionKey: '省/自治区',
          value: '上海'
        },
        {
          dimensionKey: '省/自治区',
          value: '安徽'
        },
        {
          dimensionKey: '省/自治区',
          value: '山东'
        },
        {
          dimensionKey: '省/自治区',
          value: '江苏'
        },
        {
          dimensionKey: '省/自治区',
          value: '江西'
        },
        {
          dimensionKey: '省/自治区',
          value: '浙江'
        },
        {
          dimensionKey: '省/自治区',
          value: '福建'
        }
      ]
    },
    {
      dimensionKey: '地区',
      value: '华北',
      children: [
        {
          dimensionKey: '省/自治区',
          value: '内蒙古'
        },
        {
          dimensionKey: '省/自治区',
          value: '北京'
        },
        {
          dimensionKey: '省/自治区',
          value: '天津'
        },
        {
          dimensionKey: '省/自治区',
          value: '山西'
        },
        {
          dimensionKey: '省/自治区',
          value: '河北'
        }
      ]
    },
    {
      dimensionKey: '地区',
      value: '西北',
      children: [
        {
          dimensionKey: '省/自治区',
          value: '宁夏'
        },
        {
          dimensionKey: '省/自治区',
          value: '新疆'
        },
        {
          dimensionKey: '省/自治区',
          value: '甘肃'
        },
        {
          dimensionKey: '省/自治区',
          value: '陕西'
        },
        {
          dimensionKey: '省/自治区',
          value: '青海'
        }
      ]
    },
    {
      dimensionKey: '地区',
      value: '西南',
      children: [
        {
          dimensionKey: '省/自治区',
          value: '云南'
        },
        {
          dimensionKey: '省/自治区',
          value: '四川'
        },
        {
          dimensionKey: '省/自治区',
          value: '海南'
        },
        {
          dimensionKey: '省/自治区',
          value: '西藏自治区'
        },
        {
          dimensionKey: '省/自治区',
          value: '贵州'
        },
        {
          dimensionKey: '省/自治区',
          value: '重庆'
        }
      ]
    }
  ];
  const columnTree = [
    {
      dimensionKey: '子类别',
      value: '书架',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '信封',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '器具',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '复印机',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '收纳具',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '标签',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '桌子',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '椅子',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '用具',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '用品',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '电话',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '系固件',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '纸张',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '美术',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '装订机',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '设备',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    },
    {
      dimensionKey: '子类别',
      value: '配件',
      children: [
        {
          indicatorKey: '利润'
        },
        {
          indicatorKey: '销售额'
        }
      ]
    }
  ];
  const rows = [
    {
      dimensionKey: '地区',
      title: '地区',
      headerStyle: {
        textStick: true,
        color: 'red',
        bgColor: 'yellow'
      },
      width: 'auto',
      showSort: false
    },
    {
      dimensionKey: '省/自治区',
      title: '省/自治区',
      width: 'auto',
      showSort: false,
      headerStyle: {
        textStick: true,
        color: 'red',
        bgColor: 'yellow',
        marked(arg) {
          const cellHeaderPaths = arg.table.getCellHeaderPaths(arg.col, arg.row);
          if (cellHeaderPaths.rowHeaderPaths[1].value === '辽宁') {
            return true;
          }
          return false;
        }
      }
    }
  ];
  const columns = [
    {
      dimensionKey: '子类别',
      title: '子类别',
      headerStyle: {
        textStick: true
      },
      showSort: false
    }
  ];
  const indicators = [
    {
      indicatorKey: '利润',
      title: '利润',
      width: 'auto',
      style: {
        borderColor: 'red',
        bgColor(arg) {
          if (Number(Math.ceil(arg.row)) % 2 === 1) {
            return 'gray';
          }
          return '#f6d7b8';
        }
      }
    },
    {
      indicatorKey: '销售额',
      title: '销售额',
      width: 'auto'
    }
  ];
  //初始化表格
  const tableInstance = new PivotTable({
    container: document.getElementById(CONTAINER_ID),
    rowTree,
    columnTree,
    rows,
    columns,
    indicators,
    corner: {
      titleOnDimension: 'row'
    },
    showColumnHeader: true,
    showRowHeader: true,
    hideIndicatorName: false,
    defaultColWidth: 150,
    heightMode: 'autoHeight',
    autoWrapText: true,
    records: [
      {
        '行 ID': '1',
        '订单 ID': 'US-2019-1357144',
        订单日期: '2019/4/27',
        发货日期: '2019/4/29',
        邮寄方式: '二级',
        '客户 ID': '曾惠-14485',
        客户名称: '曾惠',
        细分: '公司',
        城市: '杭州',
        '省/自治区': '浙江',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-用品-10002717',
        类别: '办公用品',
        子类别: '用品',
        产品名称: 'Fiskars 剪刀, 蓝色',
        销售额: '129.696',
        数量: '2',
        折扣: '0.4',
        利润: '-60.704'
      },
      {
        '行 ID': '2',
        '订单 ID': 'CN-2019-1973789',
        订单日期: '2019/6/15',
        发货日期: '2019/6/19',
        邮寄方式: '标准级',
        '客户 ID': '许安-10165',
        客户名称: '许安',
        细分: '消费者',
        城市: '内江',
        '省/自治区': '四川',
        '国家/地区': '中国',
        地区: '西南',
        '产品 ID': '办公用-信封-10004832',
        类别: '办公用品',
        子类别: '信封',
        产品名称: 'GlobeWeis 搭扣信封, 红色',
        销售额: '125.44',
        数量: '2',
        折扣: '0',
        利润: '42.56'
      },
      {
        '行 ID': '3',
        '订单 ID': 'CN-2019-1973789',
        订单日期: '2019/6/15',
        发货日期: '2019/6/19',
        邮寄方式: '标准级',
        '客户 ID': '许安-10165',
        客户名称: '许安',
        细分: '消费者',
        城市: '内江',
        '省/自治区': '四川',
        '国家/地区': '中国',
        地区: '西南',
        '产品 ID': '办公用-装订-10001505',
        类别: '办公用品',
        子类别: '装订机',
        产品名称: 'Cardinal 孔加固材料, 回收',
        销售额: '31.92',
        数量: '2',
        折扣: '0.4',
        利润: '4.2'
      },
      {
        '行 ID': '4',
        '订单 ID': 'US-2019-3017568',
        订单日期: '2019/12/9',
        发货日期: '2019/12/13',
        邮寄方式: '标准级',
        '客户 ID': '宋良-17170',
        客户名称: '宋良',
        细分: '公司',
        城市: '镇江',
        '省/自治区': '江苏',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-用品-10003746',
        类别: '办公用品',
        子类别: '用品',
        产品名称: 'Kleencut 开信刀, 工业',
        销售额: '321.216',
        数量: '4',
        折扣: '0.4',
        利润: '-27.104'
      },
      {
        '行 ID': '5',
        '订单 ID': 'CN-2018-2975416',
        订单日期: '2018/5/31',
        发货日期: '2018/6/2',
        邮寄方式: '二级',
        '客户 ID': '万兰-15730',
        客户名称: '万兰',
        细分: '消费者',
        城市: '汕头',
        '省/自治区': '广东',
        '国家/地区': '中国',
        地区: '中南',
        '产品 ID': '办公用-器具-10003452',
        类别: '办公用品',
        子类别: '器具',
        产品名称: 'KitchenAid 搅拌机, 黑色',
        销售额: '1375.92',
        数量: '3',
        折扣: '0',
        利润: '550.2'
      },
      {
        '行 ID': '6',
        '订单 ID': 'CN-2017-4497736',
        订单日期: '2017/10/27',
        发货日期: '2017/10/31',
        邮寄方式: '标准级',
        '客户 ID': '俞明-18325',
        客户名称: '俞明',
        细分: '消费者',
        城市: '景德镇',
        '省/自治区': '江西',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '技术-设备-10001640',
        类别: '技术',
        子类别: '设备',
        产品名称: '柯尼卡 打印机, 红色',
        销售额: '11129.58',
        数量: '9',
        折扣: '0',
        利润: '3783.78'
      },
      {
        '行 ID': '7',
        '订单 ID': 'CN-2017-4497736',
        订单日期: '2017/10/27',
        发货日期: '2017/10/31',
        邮寄方式: '标准级',
        '客户 ID': '俞明-18325',
        客户名称: '俞明',
        细分: '消费者',
        城市: '景德镇',
        '省/自治区': '江西',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-装订-10001029',
        类别: '办公用品',
        子类别: '装订机',
        产品名称: 'Ibico 订书机, 实惠',
        销售额: '479.92',
        数量: '2',
        折扣: '0',
        利润: '172.76'
      },
      {
        '行 ID': '8',
        '订单 ID': 'CN-2017-4497736',
        订单日期: '2017/10/27',
        发货日期: '2017/10/31',
        邮寄方式: '标准级',
        '客户 ID': '俞明-18325',
        客户名称: '俞明',
        细分: '消费者',
        城市: '景德镇',
        '省/自治区': '江西',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '家具-椅子-10000578',
        类别: '家具',
        子类别: '椅子',
        产品名称: 'SAFCO 扶手椅, 可调',
        销售额: '8659.84',
        数量: '4',
        折扣: '0',
        利润: '2684.08'
      },
      {
        '行 ID': '9',
        '订单 ID': 'CN-2017-4497736',
        订单日期: '2017/10/27',
        发货日期: '2017/10/31',
        邮寄方式: '标准级',
        '客户 ID': '俞明-18325',
        客户名称: '俞明',
        细分: '消费者',
        城市: '景德镇',
        '省/自治区': '江西',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-纸张-10001629',
        类别: '办公用品',
        子类别: '纸张',
        产品名称: 'Green Bar 计划信息表, 多色',
        销售额: '588',
        数量: '5',
        折扣: '0',
        利润: '46.9'
      },
      {
        '行 ID': '10',
        '订单 ID': 'CN-2017-4497736',
        订单日期: '2017/10/27',
        发货日期: '2017/10/31',
        邮寄方式: '标准级',
        '客户 ID': '俞明-18325',
        客户名称: '俞明',
        细分: '消费者',
        城市: '景德镇',
        '省/自治区': '江西',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-系固-10004801',
        类别: '办公用品',
        子类别: '系固件',
        产品名称: 'Stockwell 橡皮筋, 整包',
        销售额: '154.28',
        数量: '2',
        折扣: '0',
        利润: '33.88'
      },
      {
        '行 ID': '11',
        '订单 ID': 'CN-2016-4195213',
        订单日期: '2016/12/22',
        发货日期: '2016/12/24',
        邮寄方式: '二级',
        '客户 ID': '谢雯-21700',
        客户名称: '谢雯',
        细分: '小型企业',
        城市: '榆林',
        '省/自治区': '陕西',
        '国家/地区': '中国',
        地区: '西北',
        '产品 ID': '技术-设备-10000001',
        类别: '技术',
        子类别: '设备',
        产品名称: '爱普生 计算器, 耐用',
        销售额: '434.28',
        数量: '2',
        折扣: '0',
        利润: '4.2'
      },
      {
        '行 ID': '12',
        '订单 ID': 'CN-2019-5801711',
        订单日期: '2019/6/1',
        发货日期: '2019/6/6',
        邮寄方式: '标准级',
        '客户 ID': '康青-19585',
        客户名称: '康青',
        细分: '消费者',
        城市: '哈尔滨',
        '省/自治区': '黑龙江',
        '国家/地区': '中国',
        地区: '东北',
        '产品 ID': '技术-复印-10002416',
        类别: '技术',
        子类别: '复印机',
        产品名称: '惠普 墨水, 红色',
        销售额: '2368.8',
        数量: '4',
        折扣: '0',
        利润: '639.52'
      },
      {
        '行 ID': '13',
        '订单 ID': 'CN-2017-2752724',
        订单日期: '2017/6/5',
        发货日期: '2017/6/9',
        邮寄方式: '标准级',
        '客户 ID': '赵婵-10885',
        客户名称: '赵婵',
        细分: '消费者',
        城市: '青岛',
        '省/自治区': '山东',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-信封-10000017',
        类别: '办公用品',
        子类别: '信封',
        产品名称: 'Jiffy 局间信封, 银色',
        销售额: '683.76',
        数量: '3',
        折扣: '0',
        利润: '88.62'
      },
      {
        '行 ID': '14',
        '订单 ID': 'CN-2017-2752724',
        订单日期: '2017/6/5',
        发货日期: '2017/6/9',
        邮寄方式: '标准级',
        '客户 ID': '赵婵-10885',
        客户名称: '赵婵',
        细分: '消费者',
        城市: '青岛',
        '省/自治区': '山东',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '技术-配件-10004920',
        类别: '技术',
        子类别: '配件',
        产品名称: 'SanDisk 键区, 可编程',
        销售额: '1326.5',
        数量: '5',
        折扣: '0',
        利润: '344.4'
      },
      {
        '行 ID': '15',
        '订单 ID': 'CN-2017-2752724',
        订单日期: '2017/6/5',
        发货日期: '2017/6/9',
        邮寄方式: '标准级',
        '客户 ID': '赵婵-10885',
        客户名称: '赵婵',
        细分: '消费者',
        城市: '青岛',
        '省/自治区': '山东',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '技术-电话-10004349',
        类别: '技术',
        子类别: '电话',
        产品名称: '诺基亚 充电器, 蓝色',
        销售额: '5936.56',
        数量: '2',
        折扣: '0',
        利润: '2849.28'
      },
      {
        '行 ID': '16',
        '订单 ID': 'US-2018-2511714',
        订单日期: '2018/11/22',
        发货日期: '2018/11/25',
        邮寄方式: '一级',
        '客户 ID': '刘斯-20965',
        客户名称: '刘斯云',
        细分: '公司',
        城市: '徐州',
        '省/自治区': '江苏',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-器具-10003582',
        类别: '办公用品',
        子类别: '器具',
        产品名称: 'KitchenAid 冰箱, 黑色',
        销售额: '10336.452',
        数量: '7',
        折扣: '0.4',
        利润: '-3962.728'
      },
      {
        '行 ID': '17',
        '订单 ID': 'US-2018-2511714',
        订单日期: '2018/11/22',
        发货日期: '2018/11/25',
        邮寄方式: '一级',
        '客户 ID': '刘斯-20965',
        客户名称: '刘斯云',
        细分: '公司',
        城市: '徐州',
        '省/自治区': '江苏',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-标签-10004648',
        类别: '办公用品',
        子类别: '标签',
        产品名称: 'Novimex 圆形标签, 红色',
        销售额: '85.26',
        数量: '3',
        折扣: '0',
        利润: '38.22'
      },
      {
        '行 ID': '18',
        '订单 ID': 'CN-2019-5631342',
        订单日期: '2019/10/2',
        发货日期: '2019/10/4',
        邮寄方式: '二级',
        '客户 ID': '白鹄-14050',
        客户名称: '白鹄',
        细分: '消费者',
        城市: '上海',
        '省/自治区': '上海',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '技术-配件-10001200',
        类别: '技术',
        子类别: '配件',
        产品名称: 'Memorex 键盘, 实惠',
        销售额: '2330.44',
        数量: '7',
        折扣: '0',
        利润: '1071.14'
      },
      {
        '行 ID': '19',
        '订单 ID': 'CN-2019-5631342',
        订单日期: '2019/10/2',
        发货日期: '2019/10/4',
        邮寄方式: '二级',
        '客户 ID': '白鹄-14050',
        客户名称: '白鹄',
        细分: '消费者',
        城市: '上海',
        '省/自治区': '上海',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-用品-10000039',
        类别: '办公用品',
        子类别: '用品',
        产品名称: 'Acme 尺子, 工业',
        销售额: '85.54',
        数量: '1',
        折扣: '0',
        利润: '23.94'
      },
      {
        '行 ID': '20',
        '订单 ID': 'CN-2019-5631342',
        订单日期: '2019/10/2',
        发货日期: '2019/10/4',
        邮寄方式: '二级',
        '客户 ID': '白鹄-14050',
        客户名称: '白鹄',
        细分: '消费者',
        城市: '上海',
        '省/自治区': '上海',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-装订-10004589',
        类别: '办公用品',
        子类别: '装订机',
        产品名称: 'Avery 孔加固材料, 耐用',
        销售额: '137.9',
        数量: '5',
        折扣: '0',
        利润: '2.1'
      },
      {
        '行 ID': '21',
        '订单 ID': 'CN-2019-5631342',
        订单日期: '2019/10/2',
        发货日期: '2019/10/4',
        邮寄方式: '二级',
        '客户 ID': '白鹄-14050',
        客户名称: '白鹄',
        细分: '消费者',
        城市: '上海',
        '省/自治区': '上海',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-装订-10004369',
        类别: '办公用品',
        子类别: '装订机',
        产品名称: 'Cardinal 装订机, 回收',
        销售额: '397.32',
        数量: '6',
        折扣: '0',
        利润: '126.84'
      },
      {
        '行 ID': '22',
        '订单 ID': 'CN-2019-5631342',
        订单日期: '2019/10/2',
        发货日期: '2019/10/4',
        邮寄方式: '二级',
        '客户 ID': '白鹄-14050',
        客户名称: '白鹄',
        细分: '消费者',
        城市: '上海',
        '省/自治区': '上海',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '技术-电话-10002777',
        类别: '技术',
        子类别: '电话',
        产品名称: '三星 办公室电话机, 整包',
        销售额: '2133.46',
        数量: '7',
        折扣: '0',
        利润: '959.42'
      },
      {
        '行 ID': '23',
        '订单 ID': 'CN-2019-5631342',
        订单日期: '2019/10/2',
        发货日期: '2019/10/4',
        邮寄方式: '二级',
        '客户 ID': '白鹄-14050',
        客户名称: '白鹄',
        细分: '消费者',
        城市: '上海',
        '省/自治区': '上海',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '技术-复印-10002045',
        类别: '技术',
        子类别: '复印机',
        产品名称: 'Hewlett 传真机, 数字化',
        销售额: '4473.84',
        数量: '3',
        折扣: '0',
        利润: '1162.98'
      },
      {
        '行 ID': '24',
        '订单 ID': 'CN-2019-5631342',
        订单日期: '2019/10/2',
        发货日期: '2019/10/4',
        邮寄方式: '二级',
        '客户 ID': '白鹄-14050',
        客户名称: '白鹄',
        细分: '消费者',
        城市: '上海',
        '省/自治区': '上海',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-用品-10004353',
        类别: '办公用品',
        子类别: '用品',
        产品名称: 'Elite 开信刀, 工业',
        销售额: '269.92',
        数量: '2',
        折扣: '0',
        利润: '118.72'
      },
      {
        '行 ID': '25',
        '订单 ID': 'US-2018-4150614',
        订单日期: '2018/6/7',
        发货日期: '2018/6/14',
        邮寄方式: '标准级',
        '客户 ID': '贾彩-10600',
        客户名称: '贾彩',
        细分: '公司',
        城市: '温岭',
        '省/自治区': '浙江',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '家具-书架-10004730',
        类别: '家具',
        子类别: '书架',
        产品名称: 'Sauder 书架, 金属',
        销售额: '1638.336',
        数量: '4',
        折扣: '0.4',
        利润: '-464.464'
      },
      {
        '行 ID': '26',
        '订单 ID': 'US-2018-4150614',
        订单日期: '2018/6/7',
        发货日期: '2018/6/14',
        邮寄方式: '标准级',
        '客户 ID': '贾彩-10600',
        客户名称: '贾彩',
        细分: '公司',
        城市: '温岭',
        '省/自治区': '浙江',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '家具-椅子-10002386',
        类别: '家具',
        子类别: '椅子',
        产品名称: 'Office Star 摇椅, 可调',
        销售额: '1204.56',
        数量: '3',
        折扣: '0.4',
        利润: '60.06'
      },
      {
        '行 ID': '27',
        '订单 ID': 'US-2018-4150614',
        订单日期: '2018/6/7',
        发货日期: '2018/6/14',
        邮寄方式: '标准级',
        '客户 ID': '贾彩-10600',
        客户名称: '贾彩',
        细分: '公司',
        城市: '温岭',
        '省/自治区': '浙江',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-系固-10003889',
        类别: '办公用品',
        子类别: '系固件',
        产品名称: 'OIC 图钉, 金属',
        销售额: '198.66',
        数量: '5',
        折扣: '0.4',
        利润: '-16.94'
      },
      {
        '行 ID': '28',
        '订单 ID': 'US-2018-4150614',
        订单日期: '2018/6/7',
        发货日期: '2018/6/14',
        邮寄方式: '标准级',
        '客户 ID': '贾彩-10600',
        客户名称: '贾彩',
        细分: '公司',
        城市: '温岭',
        '省/自治区': '浙江',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-系固-10003118',
        类别: '办公用品',
        子类别: '系固件',
        产品名称: 'Accos 图钉, 混合尺寸',
        销售额: '249.312',
        数量: '8',
        折扣: '0.4',
        利润: '-58.688'
      },
      {
        '行 ID': '29',
        '订单 ID': 'US-2018-4150614',
        订单日期: '2018/6/7',
        发货日期: '2018/6/14',
        邮寄方式: '标准级',
        '客户 ID': '贾彩-10600',
        客户名称: '贾彩',
        细分: '公司',
        城市: '温岭',
        '省/自治区': '浙江',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-用品-10002717',
        类别: '办公用品',
        子类别: '用品',
        产品名称: 'Fiskars 剪刀, 蓝色',
        销售额: '389.088',
        数量: '6',
        折扣: '0.4',
        利润: '-182.112'
      },
      {
        '行 ID': '30',
        '订单 ID': 'US-2018-4150614',
        订单日期: '2018/6/7',
        发货日期: '2018/6/14',
        邮寄方式: '标准级',
        '客户 ID': '贾彩-10600',
        客户名称: '贾彩',
        细分: '公司',
        城市: '温岭',
        '省/自治区': '浙江',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '技术-配件-10003585',
        类别: '技术',
        子类别: '配件',
        产品名称: '罗技 路由器, 实惠',
        销售额: '692.496',
        数量: '1',
        折扣: '0.4',
        利润: '-34.664'
      },
      {
        '行 ID': '31',
        '订单 ID': 'US-2018-4150614',
        订单日期: '2018/6/7',
        发货日期: '2018/6/14',
        邮寄方式: '标准级',
        '客户 ID': '贾彩-10600',
        客户名称: '贾彩',
        细分: '公司',
        城市: '温岭',
        '省/自治区': '浙江',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '家具-用具-10001174',
        类别: '家具',
        子类别: '用具',
        产品名称: 'Tenex 灯泡, 黑色',
        销售额: '106.008',
        数量: '2',
        折扣: '0.4',
        利润: '-9.072'
      },
      {
        '行 ID': '32',
        '订单 ID': 'CN-2019-4364300',
        订单日期: '2019/12/12',
        发货日期: '2019/12/15',
        邮寄方式: '二级',
        '客户 ID': '马丽-15910',
        客户名称: '马丽',
        细分: '消费者',
        城市: '上海',
        '省/自治区': '上海',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-装订-10004816',
        类别: '办公用品',
        子类别: '装订机',
        产品名称: 'Wilson Jones 标签, 回收',
        销售额: '158.9',
        数量: '5',
        折扣: '0',
        利润: '72.8'
      },
      {
        '行 ID': '33',
        '订单 ID': 'CN-2019-3230180',
        订单日期: '2019/9/28',
        发货日期: '2019/10/2',
        邮寄方式: '二级',
        '客户 ID': '宋栋-12310',
        客户名称: '宋栋',
        细分: '公司',
        城市: '唐山',
        '省/自治区': '河北',
        '国家/地区': '中国',
        地区: '华北',
        '产品 ID': '办公用-收纳-10001942',
        类别: '办公用品',
        子类别: '收纳具',
        产品名称: 'Fellowes 文件车, 金属',
        销售额: '1272.88',
        数量: '2',
        折扣: '0',
        利润: '585.48'
      },
      {
        '行 ID': '34',
        '订单 ID': 'CN-2019-3230180',
        订单日期: '2019/9/28',
        发货日期: '2019/10/2',
        邮寄方式: '二级',
        '客户 ID': '宋栋-12310',
        客户名称: '宋栋',
        细分: '公司',
        城市: '唐山',
        '省/自治区': '河北',
        '国家/地区': '中国',
        地区: '华北',
        '产品 ID': '家具-椅子-10000374',
        类别: '家具',
        子类别: '椅子',
        产品名称: 'Harbour Creations 椅垫, 可调',
        销售额: '1738.1',
        数量: '5',
        折扣: '0',
        利润: '799.4'
      },
      {
        '行 ID': '35',
        '订单 ID': 'US-2018-1966627',
        订单日期: '2018/11/19',
        发货日期: '2018/11/23',
        邮寄方式: '标准级',
        '客户 ID': '巩虢-13495',
        客户名称: '巩虢',
        细分: '公司',
        城市: '宁波',
        '省/自治区': '浙江',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '家具-书架-10002226',
        类别: '家具',
        子类别: '书架',
        产品名称: 'Dania 书架, 白色',
        销售额: '1390.032',
        数量: '4',
        折扣: '0.4',
        利润: '-486.528'
      },
      {
        '行 ID': '36',
        '订单 ID': 'CN-2018-1190387',
        订单日期: '2018/2/28',
        发货日期: '2018/3/1',
        邮寄方式: '一级',
        '客户 ID': '常松-20575',
        客户名称: '常松',
        细分: '消费者',
        城市: '上海',
        '省/自治区': '上海',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '家具-用具-10002645',
        类别: '家具',
        子类别: '用具',
        产品名称: 'Advantus 灯泡, 耐用',
        销售额: '399',
        数量: '5',
        折扣: '0',
        利润: '0'
      },
      {
        '行 ID': '37',
        '订单 ID': 'CN-2018-3216455',
        订单日期: '2018/9/3',
        发货日期: '2018/9/6',
        邮寄方式: '二级',
        '客户 ID': '田黎-16450',
        客户名称: '田黎明',
        细分: '公司',
        城市: '厦门',
        '省/自治区': '福建',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-美术-10001683',
        类别: '办公用品',
        子类别: '美术',
        产品名称: 'Boston 画布, 蓝色',
        销售额: '250.32',
        数量: '1',
        折扣: '0',
        利润: '32.48'
      },
      {
        '行 ID': '38',
        '订单 ID': 'CN-2018-4690757',
        订单日期: '2018/9/17',
        发货日期: '2018/9/21',
        邮寄方式: '标准级',
        '客户 ID': '谭乐-17815',
        客户名称: '谭乐',
        细分: '消费者',
        城市: '宿州',
        '省/自治区': '安徽',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-纸张-10003357',
        类别: '办公用品',
        子类别: '纸张',
        产品名称: 'Green Bar 笔记本, 优质',
        销售额: '834.12',
        数量: '6',
        折扣: '0',
        利润: '399.84'
      },
      {
        '行 ID': '39',
        '订单 ID': 'CN-2018-4690757',
        订单日期: '2018/9/17',
        发货日期: '2018/9/21',
        邮寄方式: '标准级',
        '客户 ID': '谭乐-17815',
        客户名称: '谭乐',
        细分: '消费者',
        城市: '宿州',
        '省/自治区': '安徽',
        '国家/地区': '中国',
        地区: '华东',
        '产品 ID': '办公用-收纳-10002029',
        类别: '办公用品',
        子类别: '收纳具',
        产品名称: 'Smead 盘, 工业',
        销售额: '228.48',
        数量: '1',
        折扣: '0',
        利润: '77.56'
      }
    ]
  });
  (window as any).tableInstance = tableInstance;

  // setTimeout(() => {
  //   indicators[0].format = rec => {
  //     return rec?.['利润'] ?? '0' + '元';
  //   };
  //   const option1 = {
  //     rowTree,
  //     columnTree,
  //     rows,
  //     columns,
  //     indicators,
  //     corner: {
  //       titleOnDimension: 'row'
  //     },
  //     showColumnHeader: true,
  //     showRowHeader: true,
  //     hideIndicatorName: true,
  //     defaultColWidth: 150,
  //     heightMode: 'autoHeight',
  //     autoWrapText: true
  //   };
  //   tableInstance.updateOption(option1);
  // }, 3000);
}
