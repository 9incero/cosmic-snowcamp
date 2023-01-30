import React, { PureComponent } from "react";
import { useParams } from "react-router-dom";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

function Detail(props) {
  var params = useParams();
  var _id = params.id;
  console.log(params);
  console.log(_id);
  console.log(props.datalist[0]);
  console.log(props.datalist[0].context);
  console.log(props.datalist[0].context[1]);
  console.log(props.datalist[0].context[1].content);
  console.log("zz", Number(props.datalist[0].context[1].content.NUTR_CONT8));
  console.log(typeof parseInt(props.datalist[0].context[1].content.NUTR_CONT8));
  console.log(props.datalist[props.foodnum].context[_id].NUTR_CONT5);
  console.log(typeof 100);
  const data = [
    {
      name: "탄수화물",
      value:
        Number(props.datalist[props.foodnum].context[_id].content.NUTR_CONT2) *
        4,
    },
    {
      name: "지방",
      value:
        Number(props.datalist[props.foodnum].context[_id].content.NUTR_CONT4) *
        9,
    },
    {
      name: "단백질",
      value:
        Number(props.datalist[props.foodnum].context[_id].content.NUTR_CONT3) *
        4,
    },
    {
      name: "당류",
      value:
        Number(props.datalist[props.foodnum].context[_id].content.NUTR_CONT5) *
        4,
    },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = function ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <>
      <div>
        <h1>{props.datalist[props.foodnum].context[_id].name}</h1>
        <h2>
          1회 섭취량당 칼로리:{" "}
          {props.datalist[props.foodnum].context[_id].content.NUTR_CONT1}
        </h2>
      </div>
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </>
  );
}

export default Detail;
