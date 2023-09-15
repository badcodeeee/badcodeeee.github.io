// 柱状图1模块
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
                "\u4e0a\u6d77",
                "\u5e7f\u5dde",
                "\u5317\u4eac",
                "\u6df1\u5733",
                "\u6b66\u6c49",
                "\u82cf\u5dde",
                "\u5357\u4eac",
                "\u676d\u5dde",
                "\u6210\u90fd",
                "\u5927\u8fde"
            ],
        // axisTick: {
        //   alignWithLabel: true
        // },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "城市出现次数",
        type: "bar",
        barWidth: "35%",
        data: [
                125,
                81,
                74,
                67,
                38,
                31,
                29,
                24,
                21,
                17
            ],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 数据变化
  // var dataAll = [
  //   { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
  //   { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
  // ];

  $(".bar h2 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  // (1)准备数据
  var data = {
    year: [
      [28, 134, 375,81,32],
      [4,29,215,317,85]
    ]
  };

  // 2. 指定配置和数据
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "0~5000\u5143",
        "5001~8000\u5143",
        "8001~15000\u5143",
        "15001~25000\u5143",
        "25000\u4ee5\u4e0a",
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      // axisTick: {
      //   show: false
      // },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "最高薪资",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: "最低薪资",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data.year[1]
      }
    ]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 饼形图定制
// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function(p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["\u6c11\u8425", "\u5df2\u4e0a\u5e02",
"\u56fd\u4f01",
"\u5916\u8d44\uff08\u975e\u6b27\u7f8e\uff09",
"\u5408\u8d44",
"\u5916\u8d44\uff08\u6b27\u7f8e\uff09",
"\u521b\u4e1a\u516c\u53f8",
"\u653f\u5e9c\u673a\u5173",
"\u4e8b\u4e1a\u5355\u4f4d"
,
"\u975e\u8425\u5229\u7ec4\u7ec7",
],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "学历占比",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
        ],
        label: { show: false },
        labelLine: { show: false },
        data: [
          {
                    "name": "\u6c11\u8425",
                    "value": 426
                },
                {
                    "name": "\u5df2\u4e0a\u5e02",
                    "value": 64
                },
                {
                    "name": "\u56fd\u4f01",
                    "value": 39
                },
                {
                    "name": "\u5916\u8d44\uff08\u975e\u6b27\u7f8e\uff09",
                    "value": 36
                },
                {
                    "name": "\u5408\u8d44",
                    "value": 29
                },
                {
                    "name": "\u5916\u8d44\uff08\u6b27\u7f8e\uff09",
                    "value": 27
                },
                {
                    "name": "\u521b\u4e1a\u516c\u53f8",
                    "value": 6
                },
                {
                    "name": "\u653f\u5e9c\u673a\u5173",
                    "value": 4
                },
                {
                    "name": "\u4e8b\u4e1a\u5355\u4f4d",
                    "value": 4
                },
                {
                    "name": "\u975e\u8425\u5229\u7ec4\u7ec7",
                    "value": 3
                }
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 学习进度柱状图模块
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var data = [
                252,
                156,
                116,
                81,
                39,
                4,
                1
            ];
  var titlename = [
                "3-4\u5e74",
                "2\u5e74",
                "1\u5e74",
                "5-7\u5e74",
                "\u65e0\u9700\u7ecf\u9a8c",
                "8-9\u5e74",
                "10\u5e74\u4ee5\u4e0a"
            ];
  var valdata = [702, 350, 610, 793, 664];
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  option = {
    //图标位置
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        // axisTick: {
        //   show: false
        // },
        axisLabel: {
          color: "#fff",

          rich: {
            lg: {
              backgroundColor: "#339911",
              color: "#fff",
              // borderRadius: 15,
              // padding: 5,
              align: "center",
              width: 15,
              height: 9
            }
          }
        }
      },
      // {
      //   show: true,
      //   inverse: true,
      //   data: valdata,
      //   axisLabel: {
      //     textStyle: {
      //       fontSize: 12,
      //       color: "#fff"
      //     }
      //   }
      // }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        // barCategoryGap: 50,
        // barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: function(params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];

            }
          }
        },
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{c}"
          }
        }
      },
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 折线图 优秀作品
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },

        data: [
                "\u4e0a\u6d77",
                "\u4e1c\u839e",
                "\u4e2d\u5c71",
                "\u4f5b\u5c71",
                "\u5317\u4eac",
                "\u5357\u4eac",
                "\u5357\u660c",
                "\u5408\u80a5",
                "\u547c\u548c\u6d69\u7279",
                "\u54c8\u5c14\u6ee8",
                "\u5609\u5174",
                "\u5927\u8fde",
                "\u5929\u6d25",
                "\u5b81\u6ce2",
                "\u5bbf\u5dde",
                "\u5e38\u5dde",
                "\u5e38\u719f",
                "\u5e7f\u4e1c\u7701",
                "\u5e7f\u5dde",
                "\u5f20\u5bb6\u53e3",
                "\u6210\u90fd",
                "\u65e0\u9521",
                "\u6606\u5c71",
                "\u6606\u660e",
                "\u676d\u5dde",
                "\u682a\u6d32",
                "\u6b66\u6c49",
                "\u6c5f\u82cf\u7701",
                "\u6c5f\u95e8",
                "\u6c88\u9633",
                "\u6d4e\u5357",
                "\u6df1\u5733",
                "\u6e29\u5dde",
                "\u73e0\u6d77",
                "\u798f\u5dde",
                "\u82cf\u5dde",
                "\u897f\u5b89",
                "\u8d35\u9633",
                "\u90d1\u5dde",
                "\u91cd\u5e86",
                "\u91d1\u534e",
                "\u957f\u6625",
                "\u957f\u6c99",
                "\u9752\u5c9b"
            ]
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "薪资",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
                21945,
                18400,
                10000,
                16166,
                21027,
                17344,
                12333,
                14875,
                10000,
                11333,
                14000,
                17941,
                8000,
                20010,
                11000,
                16388,
                18000,
                15000,
                16711,
                15000,
                18238,
                20833,
                16875,
                13000,
                21500,
                13000,
                16486,
                17000,
                8500,
                20000,
                20000,
                21365,
                14000,
                17454,
                16000,
                20849,
                18200,
                7000,
                15000,
                16125,
                20000,
                18000,
                12250,
                9000
            ]
      },
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line2 .chart"));

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },

        data: [
    "\u5927\u4e13",
    "\u672c\u79d1",
    "\u7855\u58eb"
]
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "薪资",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
                12799,
                20802,
                30205
            ]
      },
    ]
  };


  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
