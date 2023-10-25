/* eslint-disable @typescript-eslint/no-explicit-any */
import { XAxis, YAxis, AreaChart, Area, ResponsiveContainer } from "recharts";

import "./WalletGraph.scss";

const WalletGraph = ({ activeData }: { activeData: any }) => {
  return (
    <div className="WalletGraph">
      <div className="top-labels">
        <div className="info lower">
          <span className="indicator" />
          <span>Lower: ${activeData.lower}</span>
        </div>
        <div className=" info higher">
          <span className="indicator" />
          <span>Higher: ${activeData.higher}</span>
        </div>
      </div>
      <div className="graph-wrapper">
        <div className="coin-rate">
          <span
            style={{ background: activeData.strokeColor }}
            className="indicator"
          />
          <span>
            1 {activeData.shortName} = ${activeData.amount}
          </span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={200}
            data={activeData.graphData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" tickLine={false} axisLine={false} hide />
            <YAxis tickLine={false} axisLine={false} hide />
            <Area
              type="basis"
              dataKey="pv"
              stroke={activeData.strokeColor}
              strokeWidth={4}
              fill={activeData.fillColor}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WalletGraph;
