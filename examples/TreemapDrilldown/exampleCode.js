export default `
  render() {
        var levels = [{
            level: 1,
            dataLabels: {
                enabled: true
            },
            borderWidth: 3
        }];
        var dataLabels = {
            enabled: false
        };
        var tooltipText = function (e) {
            console.log(e, this);
            return \`\${this.key}: \${this.point.value}\`;
        }


        return (
            <div className="app">
                <HighchartsChart>
                    <Title>Treemap</Title>
                    <XAxis />
                    <YAxis id="value">
                        <TreemapSeries data={points} layoutAlgorithm='squarified' allowDrillToNode={true} animationLimit={1000} dataLabels={dataLabels} levelIsConstant={false} levels={levels} />
                    </YAxis>
                    <Tooltip
                        formatter={tooltipText}
                    />

                </HighchartsChart>

                <ExampleCode name="Treemap">{code}</ExampleCode>
            </div>
        );
    }
}`;
