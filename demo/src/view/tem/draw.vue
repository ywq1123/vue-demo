<template>
  <div>
    <div>
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          :class="[{ active: item.isActive }, item.basic]"
          @click="activetab(index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="backg" ref="EChart5" style="width: 100%; height: 200px"></div>
    <svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <g> 
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马</text>
    <animateTransform attributeName="transform" begin="0s" dur="10s" type="rotate" from="0 160 160" to="360 160 160" repeatCount="indefinite"/>
  </g>
</svg>
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <g> 
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">
      马
      <set attributeName="x" attributeType="XML" to="60" begin="3s" />
    </text>
  </g>
</svg>
<svg width="360" height="200" xmlns="http://www.w3.org/2000/svg">
  <text font-family="microsoft yahei" font-size="40" x="0" y="0" fill="#cd0000">马
    <animateMotion path="M10,80 q100,120 120,20 q140,-50 160,0" begin="0s" dur="3s" rotate="auto" repeatCount="indefinite"/>
  </text>
  <path d="M10,80 q100,120 120,20 q140,-50 160,0" stroke="#cd0000" stroke-width="2" fill="none" />
</svg>
<svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
</svg>
<svg width="360" height="200" xmlns="http://www.w3.org/2000/svg">
  <text font-size="40" x="0" y="0" fill="#cd0000">·
    <animateMotion path="M10 80 Q 95 40 180 80" begin="0s" dur="3s" rotate="auto" repeatCount="indefinite"/>
  </text>
  <path d="M10 80 Q 95 40 180 80" stroke="#cd0000" fill="transparent"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
</svg>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: "本周",
          active: true,
          basic: true
        },
        {
          name: "本月",
          active: false,
          basic: true
        },
        {
          name: "本年",
          active: false,
          basic: true
        }
      ]
    };
  },
  mounted() {
    this.number();
  },
  methods: {
    activetab() {
      this.list.active = true;
    },
    number() {
      // api.getmemer(url).then(data => {
      //     data;
      // 基于准备好的dom，初始化echarts实例
      let EChart = this.$echarts.init(this.$refs.EChart5);
      // 配置参数
      let config = {
        title: {
          text: "核酸采集次数分布",
          show: false
        },
        grid: {
          top: 80,
          bottom: 30,
          left: 0,
          right: 0
        },
        tooltip: {},
        xAxis: {
          data: ["1次", "2次", "3次及以上"],
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          offset: 10,
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "#ffffff",
              fontSize: 12
            }
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [32, 10],
            symbolOffset: [0, -6],
            z: 12,
            data: [
              {
                name: "1次",
                value: 100,
                symbolPosition: "end",
                itemStyle: {
                  normal: {
                    color: "#e7d080" //圆柱顶部颜色
                  }
                }
              },
              {
                name: "2次",
                value: 400,
                symbolPosition: "end",
                itemStyle: {
                  normal: {
                    color: "#fc8a8a" //圆柱顶部颜色
                  }
                }
              },
              {
                name: "3次及以上",
                value: 700,
                symbolPosition: "end",
                itemStyle: {
                  normal: {
                    color: "#8aa1fc" //圆柱顶部颜色
                  }
                }
              }
            ]
          },
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [32, 10],
            symbolOffset: [0, 6],
            z: 12,
            data: [
              {
                name: "1次",
                value: 100,
                itemStyle: {
                  normal: {
                    color: "#eabd20" //圆柱底部颜色
                  }
                }
              },
              {
                name: "2次",
                value: 400,
                itemStyle: {
                  normal: {
                    color: "#ff3939" //圆柱底部颜色
                  }
                }
              },
              {
                name: "3次及以上",
                value: 700,
                itemStyle: {
                  normal: {
                    color: "#3960ff" //圆柱底部颜色
                  }
                }
              }
            ]
          },
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [45, 14],
            symbolOffset: [0, 10],
            z: 11,
            data: [
              {
                name: "1次",
                value: 100,
                itemStyle: {
                  normal: {
                    color: "rgba(234,189,32,.5)",
                    borderColor: "#eabd20", //底部内圆圈颜色
                    borderWidth: 5
                  }
                }
              },
              {
                name: "2次",
                value: 400,
                itemStyle: {
                  normal: {
                    color: "rgba(255,57,57,.5)",
                    borderColor: "#ff3939", //底部内圆圈颜色
                    borderWidth: 5
                  }
                }
              },
              {
                name: "3次及以上",
                value: 700,
                itemStyle: {
                  normal: {
                    color: "rgba(57,96,255,.5)",
                    borderColor: "#3960ff", //底部内圆圈颜色
                    borderWidth: 5
                  }
                }
              }
            ]
          },
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [54, 17],
            symbolOffset: [0, 12],
            z: 10,
            data: [
              {
                name: "1次",
                value: 100,
                itemStyle: {
                  normal: {
                    color: "transparent",
                    borderColor: "#eabd20", //底部外圆圈颜色
                    borderType: "dashed",
                    borderWidth: 5
                  }
                }
              },
              {
                name: "2次",
                value: 400,
                itemStyle: {
                  normal: {
                    color: "transparent",
                    borderColor: "#ff3939", //底部外圆圈颜色
                    borderType: "dashed",
                    borderWidth: 5
                  }
                }
              },
              {
                name: "3次及以上",
                value: 700,
                itemStyle: {
                  normal: {
                    color: "transparent",
                    borderColor: "#3960ff", //底部外圆圈颜色
                    borderType: "dashed",
                    borderWidth: 5
                  }
                }
              }
            ]
          },
          {
            type: "bar",
            silent: true,
            barWidth: 32,

            data: [
              {
                name: "1次",
                value: 100,
                label: {
                  normal: {
                    show: true,
                    position: "top",
                    distance: 4,
                    textStyle: {
                      color: "#f7dc7f", //柱子对应数值颜色
                      fontSize: 12
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: {
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      type: "linear",
                      global: false,
                      colorStops: [
                        {
                          offset: 0,
                          color: "#eabd20"
                        },
                        {
                          offset: 1,
                          color: "#eabd20" //底部渐变颜色
                        }
                      ]
                    }
                  }
                }
              },
              {
                name: "2次",
                value: 400,
                label: {
                  normal: {
                    show: true,
                    position: "top",
                    distance: 4,
                    textStyle: {
                      color: "#ffb5b5", //柱子对应数值颜色
                      fontSize: 12
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: {
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      type: "linear",
                      global: false,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(255,57,57,.3)"
                        },
                        {
                          offset: 1,
                          color: "rgba(255,57,57,.3)" //底部渐变颜色
                        }
                      ]
                    }
                  }
                }
              },
              {
                name: "3次及以上",
                value: 700,
                label: {
                  normal: {
                    show: true,
                    position: "top",
                    distance: 4,
                    textStyle: {
                      color: "#c4d0ff", //柱子对应数值颜色
                      fontSize: 12
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: {
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      type: "linear",
                      global: false,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(58,97,255,.2)"
                        },
                        {
                          offset: 1,
                          color: "rgba(58,97,255,.6)" //底部渐变颜色
                        }
                      ]
                    }
                  }
                }
              }
            ]
          }
        ]
      };
      // 设置参数
      EChart.setOption(config);
      // });
    }
  }
};
</script>
<style scoped>
.backg {
  background: url("../../assets/bigDataBg.png") no-repeat;
  padding-bottom: 40px;
}
</style>
