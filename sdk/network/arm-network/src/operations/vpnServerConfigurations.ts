/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/vpnServerConfigurationsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a VpnServerConfigurations. */
export class VpnServerConfigurations {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a VpnServerConfigurations.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the details of a VpnServerConfiguration.
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param vpnServerConfigurationName The name of the VpnServerConfiguration being retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.VpnServerConfigurationsGetResponse>
   */
  get(resourceGroupName: string, vpnServerConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<Models.VpnServerConfigurationsGetResponse>;
  /**
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param vpnServerConfigurationName The name of the VpnServerConfiguration being retrieved.
   * @param callback The callback
   */
  get(resourceGroupName: string, vpnServerConfigurationName: string, callback: msRest.ServiceCallback<Models.VpnServerConfiguration>): void;
  /**
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param vpnServerConfigurationName The name of the VpnServerConfiguration being retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, vpnServerConfigurationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VpnServerConfiguration>): void;
  get(resourceGroupName: string, vpnServerConfigurationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VpnServerConfiguration>, callback?: msRest.ServiceCallback<Models.VpnServerConfiguration>): Promise<Models.VpnServerConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vpnServerConfigurationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VpnServerConfigurationsGetResponse>;
  }

  /**
   * Creates a VpnServerConfiguration resource if it doesn't exist else updates the existing
   * VpnServerConfiguration.
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param vpnServerConfigurationName The name of the VpnServerConfiguration being created or
   * updated.
   * @param vpnServerConfigurationParameters Parameters supplied to create or update
   * VpnServerConfiguration.
   * @param [options] The optional parameters
   * @returns Promise<Models.VpnServerConfigurationsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, vpnServerConfigurationName: string, vpnServerConfigurationParameters: Models.VpnServerConfiguration, options?: msRest.RequestOptionsBase): Promise<Models.VpnServerConfigurationsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,vpnServerConfigurationName,vpnServerConfigurationParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VpnServerConfigurationsCreateOrUpdateResponse>;
  }

  /**
   * Updates VpnServerConfiguration tags.
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param vpnServerConfigurationName The name of the VpnServerConfiguration being updated.
   * @param vpnServerConfigurationParameters Parameters supplied to update VpnServerConfiguration
   * tags.
   * @param [options] The optional parameters
   * @returns Promise<Models.VpnServerConfigurationsUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, vpnServerConfigurationName: string, vpnServerConfigurationParameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.VpnServerConfigurationsUpdateTagsResponse>;
  /**
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param vpnServerConfigurationName The name of the VpnServerConfiguration being updated.
   * @param vpnServerConfigurationParameters Parameters supplied to update VpnServerConfiguration
   * tags.
   * @param callback The callback
   */
  updateTags(resourceGroupName: string, vpnServerConfigurationName: string, vpnServerConfigurationParameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.VpnServerConfiguration>): void;
  /**
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param vpnServerConfigurationName The name of the VpnServerConfiguration being updated.
   * @param vpnServerConfigurationParameters Parameters supplied to update VpnServerConfiguration
   * tags.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateTags(resourceGroupName: string, vpnServerConfigurationName: string, vpnServerConfigurationParameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VpnServerConfiguration>): void;
  updateTags(resourceGroupName: string, vpnServerConfigurationName: string, vpnServerConfigurationParameters: Models.TagsObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VpnServerConfiguration>, callback?: msRest.ServiceCallback<Models.VpnServerConfiguration>): Promise<Models.VpnServerConfigurationsUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vpnServerConfigurationName,
        vpnServerConfigurationParameters,
        options
      },
      updateTagsOperationSpec,
      callback) as Promise<Models.VpnServerConfigurationsUpdateTagsResponse>;
  }

  /**
   * Deletes a VpnServerConfiguration.
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param vpnServerConfigurationName The name of the VpnServerConfiguration being deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, vpnServerConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,vpnServerConfigurationName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Lists all the vpnServerConfigurations in a resource group.
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param [options] The optional parameters
   * @returns Promise<Models.VpnServerConfigurationsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.VpnServerConfigurationsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>): void;
  /**
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>, callback?: msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>): Promise<Models.VpnServerConfigurationsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.VpnServerConfigurationsListByResourceGroupResponse>;
  }

  /**
   * Lists all the VpnServerConfigurations in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.VpnServerConfigurationsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.VpnServerConfigurationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>, callback?: msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>): Promise<Models.VpnServerConfigurationsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VpnServerConfigurationsListResponse>;
  }

  /**
   * Creates a VpnServerConfiguration resource if it doesn't exist else updates the existing
   * VpnServerConfiguration.
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param vpnServerConfigurationName The name of the VpnServerConfiguration being created or
   * updated.
   * @param vpnServerConfigurationParameters Parameters supplied to create or update
   * VpnServerConfiguration.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, vpnServerConfigurationName: string, vpnServerConfigurationParameters: Models.VpnServerConfiguration, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vpnServerConfigurationName,
        vpnServerConfigurationParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a VpnServerConfiguration.
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param vpnServerConfigurationName The name of the VpnServerConfiguration being deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, vpnServerConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vpnServerConfigurationName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists all the vpnServerConfigurations in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VpnServerConfigurationsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VpnServerConfigurationsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>, callback?: msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>): Promise<Models.VpnServerConfigurationsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.VpnServerConfigurationsListByResourceGroupNextResponse>;
  }

  /**
   * Lists all the VpnServerConfigurations in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VpnServerConfigurationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VpnServerConfigurationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>, callback?: msRest.ServiceCallback<Models.ListVpnServerConfigurationsResult>): Promise<Models.VpnServerConfigurationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VpnServerConfigurationsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnServerConfigurations/{vpnServerConfigurationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vpnServerConfigurationName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VpnServerConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnServerConfigurations/{vpnServerConfigurationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vpnServerConfigurationName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "vpnServerConfigurationParameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VpnServerConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnServerConfigurations",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnServerConfigurationsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/vpnServerConfigurations",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnServerConfigurationsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnServerConfigurations/{vpnServerConfigurationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vpnServerConfigurationName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "vpnServerConfigurationParameters",
    mapper: {
      ...Mappers.VpnServerConfiguration,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VpnServerConfiguration
    },
    201: {
      bodyMapper: Mappers.VpnServerConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnServerConfigurations/{vpnServerConfigurationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vpnServerConfigurationName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ListVpnServerConfigurationsResult
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
      bodyMapper: Mappers.ListVpnServerConfigurationsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};