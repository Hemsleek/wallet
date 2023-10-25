import { XAxis, YAxis, AreaChart, Area, ResponsiveContainer } from "recharts";

import "./WalletGraph.scss";
import { graphData } from "../../../constantData";

const WalletGraph = () => {
  return (
    <div className="WalletGraph">
      <div className="top-labels">
        <div className="info lower">
          <span className="indicator" />
          <span>Lower: $4.895</span>
        </div>
        <div className=" info higher">
          <span className="indicator" />
          <span>Higher: $6.857</span>
        </div>
      </div>
      <div className="graph-wrapper">
        <div className="coin-rate">
          <span className="indicator" />
          <span>1 BTC = $5.483</span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={200}
            data={graphData}
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
              stroke="#ffa92b"
              strokeWidth={4}
              fill="#fff7ee"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WalletGraph;
