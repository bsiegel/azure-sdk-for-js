/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/operationsMappers";
import * as Parameters from "../models/parameters";
import { StorSimple8000SeriesManagementClientContext } from "../storSimple8000SeriesManagementClientContext";

/** Class representing a Operations. */
export class Operations {
  private readonly client: StorSimple8000SeriesManagementClientContext;

  /**
   * Create a Operations.
   * @param {StorSimple8000SeriesManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorSimple8000SeriesManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the available REST API operations of the Microsoft.Storsimple provider
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.OperationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.AvailableProviderOperationList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailableProviderOperationList>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AvailableProviderOperationList>): Promise<Models.OperationsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.OperationsListResponse>;
  }

  /**
   * Lists all of the available REST API operations of the Microsoft.Storsimple provider
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AvailableProviderOperationList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailableProviderOperationList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AvailableProviderOperationList>): Promise<Models.OperationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.OperationsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.StorSimple/operations",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AvailableProviderOperationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AvailableProviderOperationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};