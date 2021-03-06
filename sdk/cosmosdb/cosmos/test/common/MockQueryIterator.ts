/** @hidden */
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
export class MockedQueryIterator {
  constructor(private results: any) {}
  public async fetchAll() {
    return { resources: this.results };
  }
}
