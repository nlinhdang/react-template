const Label = () => {
  const labels = [
    {
      code: "TRC20",
      totalValue: 1737.82645,
      frozenValue: 0,
      inUseValue: 1737.82645,
      availableValue: 0
    },
    {
      code: "ERC20",
      totalValue: 0,
      frozenValue: 0,
      inUseValue: 0,
      availableValue: 0
    }
  ];

  return (
    <div className="label-container">

      <div className="label">
        <p className="stock-code">UUPP</p>
        <div class="line"></div>

            <div className="desc">
              <div className="left">
                <div className="name">USDT</div>
                <div className="value">{Number(13411).toLocaleString()}</div>
                <div className="name">USDT</div>
                <div className="value">{Number(13411).toLocaleString()}</div>
              </div>

              <div className="right">
                <div className="name">USDT</div>
                <div className="value">0</div>
                <div className="name">USDT</div>
                <div className="value">0</div>
              </div>
            </div>
      </div>

      {labels.map((label, index) => {
        return (
          
            <div className="label" key={index}>
              <p className="stock-code">{label.code}</p>
              <div class="line"></div>
            
              <div className="desc">
                <div className="left">
                  <div className="name">Total</div>
                  <div className="total-value">{label.totalValue.toLocaleString('en-US', { useGrouping: true, maximumFractionDigits: 5 })}</div>
                  <div className="name">Frozen</div>
                  <div className="frozen-value">{label.frozenValue.toLocaleString('en-US', { useGrouping: true, maximumFractionDigits: 5 })}</div>
                </div>

                <div className="right">
                  <div className="name">In Use</div>
                  <div className="in-use-value">{label.inUseValue.toLocaleString('en-US', { useGrouping: true, maximumFractionDigits: 5 })}</div>
                  <div className="name">Available</div>
                  <div className="available-value">{label.availableValue.toLocaleString('en-US', { useGrouping: true, maximumFractionDigits: 5 })}</div>
                </div>
              </div>
            </div>
          
        );
      })}
    </div>
  );
};

export default Label;
