// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { IAggregator } from "./IAggregator";

/** @hidden */
export class SumAggregator implements IAggregator {
  public sum: number;
  /**
   * Add the provided item to aggregation result.
   * @memberof SumAggregator
   * @instance
   * @param other
   */
  public aggregate(other: number) {
    if (other === undefined) {
      return;
    }
    if (this.sum === undefined) {
      this.sum = other;
    } else {
      this.sum += other;
    }
  }

  /**
   * Get the aggregation result.
   * @memberof SumAggregator
   * @instance
   */
  public getResult() {
    return this.sum;
  }
}
