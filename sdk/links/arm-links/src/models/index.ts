/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing ResourceLinkFilter.
 * Resource link filter.
 *
 */
export interface ResourceLinkFilter {
  /**
   * @member {string} targetId The ID of the target resource.
   */
  targetId: string;
}

/**
 * @interface
 * An interface representing ResourceLinkProperties.
 * The resource link properties.
 *
 */
export interface ResourceLinkProperties {
  /**
   * @member {string} [sourceId] The fully qualified ID of the source resource
   * in the link.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly sourceId?: string;
  /**
   * @member {string} targetId The fully qualified ID of the target resource in
   * the link.
   */
  targetId: string;
  /**
   * @member {string} [notes] Notes about the resource link.
   */
  notes?: string;
}

/**
 * @interface
 * An interface representing ResourceLink.
 * The resource link.
 *
 * @extends BaseResource
 */
export interface ResourceLink extends BaseResource {
  /**
   * @member {string} [id] The fully qualified ID of the resource link.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] The name of the resource link.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {any} [type] The resource link object.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: any;
  /**
   * @member {ResourceLinkProperties} [properties] Properties for resource
   * link.
   */
  properties?: ResourceLinkProperties;
}

/**
 * @interface
 * An interface representing OperationDisplay.
 * The object that represents the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Service provider: Microsoft.Resources
   */
  provider?: string;
  /**
   * @member {string} [resource] Resource on which the operation is performed:
   * Profile, endpoint, etc.
   */
  resource?: string;
  /**
   * @member {string} [operation] Operation type: Read, write, delete, etc.
   */
  operation?: string;
  /**
   * @member {string} [description] Description of the operation.
   */
  description?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * Microsoft.Resources operation
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * @member {OperationDisplay} [display] The object that represents the
   * operation.
   */
  display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing ResourceLinksListAtSubscriptionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ResourceLinksListAtSubscriptionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [filter] The filter to apply on the list resource links
   * operation. The supported filter for list resource links is targetId. For
   * example, $filter=targetId eq {value}
   */
  filter?: string;
}

/**
 * @interface
 * An interface representing ResourceLinksListAtSourceScopeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ResourceLinksListAtSourceScopeOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [filter] The filter to apply when getting resource links.
   * To get links only at the specified scope (not below the scope), use
   * Filter.atScope().
   */
  filter?: string;
}

/**
 * @interface
 * An interface representing ManagementLinkClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface ManagementLinkClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the OperationListResult.
 * Result of the request to list Microsoft.Resources operations. It contains a
 * list of operations and a URL link to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * @member {string} [nextLink] URL to get the next set of operation list
   * results if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the ResourceLinkResult.
 * List of resource links.
 *
 * @extends Array<ResourceLink>
 */
export interface ResourceLinkResult extends Array<ResourceLink> {
  /**
   * @member {string} [nextLink] The URL to use for getting the next set of
   * results.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for Filter.
 * Possible values include: 'atScope()'
 * @readonly
 * @enum {string}
 */
export type Filter = 'atScope()';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ResourceLinksCreateOrUpdateResponse = ResourceLink & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceLink;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ResourceLinksGetResponse = ResourceLink & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceLink;
    };
};

/**
 * Contains response data for the listAtSubscription operation.
 */
export type ResourceLinksListAtSubscriptionResponse = ResourceLinkResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceLinkResult;
    };
};

/**
 * Contains response data for the listAtSourceScope operation.
 */
export type ResourceLinksListAtSourceScopeResponse = ResourceLinkResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceLinkResult;
    };
};

/**
 * Contains response data for the listAtSubscriptionNext operation.
 */
export type ResourceLinksListAtSubscriptionNextResponse = ResourceLinkResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceLinkResult;
    };
};

/**
 * Contains response data for the listAtSourceScopeNext operation.
 */
export type ResourceLinksListAtSourceScopeNextResponse = ResourceLinkResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceLinkResult;
    };
};