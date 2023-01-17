# My Trade Analysis Blog

Visit my blog [here](https://mytradeanalysis-252f1.web.app/)

Welcome to my trade analysis blog, I use this blog to analyze my trades and setups. This blog is only used for my personal trading journey and I post my trades to document my development as a trader.

## Instruments

I am only trading futures and mainly indices and some currency. My main focus lies with the ES (S&P-500).

## Trading strategy
My trading strategy is to scalp the ES for 1 point using my custom built indicators with trailing profit and stop targets. In the strategy I use multiple contracts with an automated ATM strategy for targeting and stop loss.

### ATM Strategy
The ATM Strategy will be tested and probably changed depending on how it works out.

The current ATM Strategy enters the market with 3 contracts with the Parameter type set to Ticks since I am trading futures, the TIF is set to GTC (Good Till Canceled).

- Target one takes profit at 4 ticks (1 point), the initial stop loss is set to 8 ticks (2 points) with a move to BE + 1 when the market hits it's target at 3 ticks (0.75 points). Target 1 takes of 1 contract to secure a small profit.
- Target 2 has a profit at 32 ticks (8 points), the initial stop loss is set to 8 ticks (1 point) with a move to BE +1 when the market hits 3 ticks (0.75 points). Target 2 gives a little room for a runner on the last 2 contracts.  

<img
  src="my-trade-analysis/public/assets/qty3TrailingStop.jpg"
  alt="ATM Strategy: BE+1"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 500px">

- The BE+ stop strategy sets the stop loss to break-even + 1 when the market reaches +3 ticks, target 1 is closed out at +4 ticks (or with the stop loss at BE+1).
- Target 2 has a small room for a runner and when the profit is +5 ticks (1.25 points), the stop loss is set at  
4 ticks (1 point), if the market moves higher the stop loss trails the market by 1 tick until stopped out or we reach the 32 tick (8 points) target for the 2 remaining contracts.
<img
  src="my-trade-analysis/public/assets/atmBePlus1.jpg"
  alt="ATM Strategy: BE+1"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 500px">

I use this strategy to lock in a 1 contract profit at 1 point and give the 2 remaining contracts a small chance of going higher. Once the market is +3 ticks the trade is at minimum a break-even trade (without counting gap or slippage).
