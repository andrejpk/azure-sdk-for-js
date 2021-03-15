/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GeneratedClient } from "../generatedClient";
import {
  BlobGetResponse,
  BlobCheckResponse,
  BlobDeleteResponse,
  BlobMountResponse,
  BlobGetStatusResponse,
  BlobUploadResponse,
  BlobEndUploadResponse,
  BlobStartUploadResponse,
  BlobGetChunkResponse,
  BlobCheckChunkResponse
} from "../models";

/** Class representing a Blob. */
export class Blob {
  private readonly client: GeneratedClient;

  /**
   * Initialize a new instance of the class Blob class.
   * @param client Reference to the service client
   */
  constructor(client: GeneratedClient) {
    this.client = client;
  }

  /**
   * Retrieve the blob from the registry identified by digest.
   * @param name Name of the image (including the namespace)
   * @param digest Digest of a BLOB
   * @param options The options parameters.
   */
  get(
    name: string,
    digest: string,
    options?: coreHttp.OperationOptions
  ): Promise<BlobGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      name,
      digest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<BlobGetResponse>;
  }

  /**
   * Same as GET, except only the headers are returned.
   * @param name Name of the image (including the namespace)
   * @param digest Digest of a BLOB
   * @param options The options parameters.
   */
  check(
    name: string,
    digest: string,
    options?: coreHttp.OperationOptions
  ): Promise<BlobCheckResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      name,
      digest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      checkOperationSpec
    ) as Promise<BlobCheckResponse>;
  }

  /**
   * Removes an already uploaded blob.
   * @param name Name of the image (including the namespace)
   * @param digest Digest of a BLOB
   * @param options The options parameters.
   */
  delete(
    name: string,
    digest: string,
    options?: coreHttp.OperationOptions
  ): Promise<BlobDeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      name,
      digest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<BlobDeleteResponse>;
  }

  /**
   * Mount a blob identified by the `mount` parameter from another repository.
   * @param name Name of the image (including the namespace)
   * @param mount Digest of blob to mount from the source repository.
   * @param fromParam Name of the source repository.
   * @param options The options parameters.
   */
  mount(
    name: string,
    mount: string,
    fromParam: string,
    options?: coreHttp.OperationOptions
  ): Promise<BlobMountResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      name,
      mount,
      fromParam,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      mountOperationSpec
    ) as Promise<BlobMountResponse>;
  }

  /**
   * Retrieve status of upload identified by uuid. The primary purpose of this endpoint is to resolve the
   * current status of a resumable upload.
   * @param location Link acquired from upload start or previous chunk. Note, do not include initial /
   *                 (must do substring(1) )
   * @param options The options parameters.
   */
  getStatus(
    location: string,
    options?: coreHttp.OperationOptions
  ): Promise<BlobGetStatusResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      location,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getStatusOperationSpec
    ) as Promise<BlobGetStatusResponse>;
  }

  /**
   * Upload a stream of data without completing the upload.
   * @param location Link acquired from upload start or previous chunk. Note, do not include initial /
   *                 (must do substring(1) )
   * @param value Raw data of blob
   * @param options The options parameters.
   */
  upload(
    location: string,
    value: coreHttp.HttpRequestBody,
    options?: coreHttp.OperationOptions
  ): Promise<BlobUploadResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      location,
      value,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      uploadOperationSpec
    ) as Promise<BlobUploadResponse>;
  }

  /**
   * Complete the upload, providing all the data in the body, if necessary. A request without a body will
   * just complete the upload with previously uploaded content.
   * @param digest Digest of a BLOB
   * @param location Link acquired from upload start or previous chunk. Note, do not include initial /
   *                 (must do substring(1) )
   * @param value Optional raw data of blob
   * @param options The options parameters.
   */
  endUpload(
    digest: string,
    location: string,
    value: coreHttp.HttpRequestBody,
    options?: coreHttp.OperationOptions
  ): Promise<BlobEndUploadResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      digest,
      location,
      value,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      endUploadOperationSpec
    ) as Promise<BlobEndUploadResponse>;
  }

  /**
   * Cancel outstanding upload processes, releasing associated resources. If this is not called, the
   * unfinished uploads will eventually timeout.
   * @param location Link acquired from upload start or previous chunk. Note, do not include initial /
   *                 (must do substring(1) )
   * @param options The options parameters.
   */
  cancelUpload(
    location: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      location,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      cancelUploadOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Initiate a resumable blob upload with an empty request body.
   * @param name Name of the image (including the namespace)
   * @param options The options parameters.
   */
  startUpload(
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<BlobStartUploadResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      name,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      startUploadOperationSpec
    ) as Promise<BlobStartUploadResponse>;
  }

  /**
   * Retrieve the blob from the registry identified by `digest`. This endpoint may also support RFC7233
   * compliant range requests. Support can be detected by issuing a HEAD request. If the header
   * `Accept-Range: bytes` is returned, range requests can be used to fetch partial content.
   * @param name Name of the image (including the namespace)
   * @param digest Digest of a BLOB
   * @param range Format : bytes=<start>-<end>,  HTTP Range header specifying blob chunk.
   * @param options The options parameters.
   */
  getChunk(
    name: string,
    digest: string,
    range: string,
    options?: coreHttp.OperationOptions
  ): Promise<BlobGetChunkResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      name,
      digest,
      range,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getChunkOperationSpec
    ) as Promise<BlobGetChunkResponse>;
  }

  /**
   * Same as GET, except only the headers are returned.
   * @param name Name of the image (including the namespace)
   * @param digest Digest of a BLOB
   * @param range Format : bytes=<start>-<end>,  HTTP Range header specifying blob chunk.
   * @param options The options parameters.
   */
  checkChunk(
    name: string,
    digest: string,
    range: string,
    options?: coreHttp.OperationOptions
  ): Promise<BlobCheckChunkResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      name,
      digest,
      range,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      checkChunkOperationSpec
    ) as Promise<BlobCheckChunkResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path: "/v2/{name}/blobs/{digest}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Stream" },
        serializedName: "parsedResponse"
      },
      headersMapper: Mappers.BlobGetHeaders
    },
    307: {
      headersMapper: Mappers.BlobGetHeaders
    },
    default: {}
  },
  urlParameters: [Parameters.url, Parameters.name, Parameters.digest],
  headerParameters: [Parameters.accept2],
  serializer
};
const checkOperationSpec: coreHttp.OperationSpec = {
  path: "/v2/{name}/blobs/{digest}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.BlobCheckHeaders
    },
    307: {
      headersMapper: Mappers.BlobCheckHeaders
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  urlParameters: [Parameters.url, Parameters.name, Parameters.digest],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/v2/{name}/blobs/{digest}",
  httpMethod: "DELETE",
  responses: {
    202: {
      bodyMapper: {
        type: { name: "Stream" },
        serializedName: "parsedResponse"
      },
      headersMapper: Mappers.BlobDeleteHeaders
    },
    default: {}
  },
  urlParameters: [Parameters.url, Parameters.name, Parameters.digest],
  headerParameters: [Parameters.accept2],
  serializer
};
const mountOperationSpec: coreHttp.OperationSpec = {
  path: "/v2/{name}/blobs/uploads/",
  httpMethod: "POST",
  responses: {
    201: {
      headersMapper: Mappers.BlobMountHeaders
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  queryParameters: [Parameters.fromParam, Parameters.mount],
  urlParameters: [Parameters.url, Parameters.name],
  headerParameters: [Parameters.accept],
  serializer
};
const getStatusOperationSpec: coreHttp.OperationSpec = {
  path: "/{nextBlobUuidLink}",
  httpMethod: "GET",
  responses: {
    204: {
      headersMapper: Mappers.BlobGetStatusHeaders
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  urlParameters: [Parameters.url, Parameters.location],
  headerParameters: [Parameters.accept],
  serializer
};
const uploadOperationSpec: coreHttp.OperationSpec = {
  path: "/{nextBlobUuidLink}",
  httpMethod: "PATCH",
  responses: {
    202: {
      headersMapper: Mappers.BlobUploadHeaders
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  requestBody: Parameters.value1,
  urlParameters: [Parameters.url, Parameters.location],
  headerParameters: [Parameters.contentType2, Parameters.accept3],
  mediaType: "binary",
  serializer
};
const endUploadOperationSpec: coreHttp.OperationSpec = {
  path: "/{nextBlobUuidLink}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.BlobEndUploadHeaders
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  requestBody: Parameters.value1,
  queryParameters: [Parameters.digest1],
  urlParameters: [Parameters.url, Parameters.location],
  headerParameters: [Parameters.contentType2, Parameters.accept3],
  mediaType: "binary",
  serializer
};
const cancelUploadOperationSpec: coreHttp.OperationSpec = {
  path: "/{nextBlobUuidLink}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  urlParameters: [Parameters.url, Parameters.location],
  headerParameters: [Parameters.accept],
  serializer
};
const startUploadOperationSpec: coreHttp.OperationSpec = {
  path: "/v2/{name}/blobs/uploads/",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.BlobStartUploadHeaders
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  urlParameters: [Parameters.url, Parameters.name],
  headerParameters: [Parameters.accept],
  serializer
};
const getChunkOperationSpec: coreHttp.OperationSpec = {
  path: "/v2/{name}/blobs/{digest}",
  httpMethod: "GET",
  responses: {
    206: {
      bodyMapper: {
        type: { name: "Stream" },
        serializedName: "parsedResponse"
      },
      headersMapper: Mappers.BlobGetChunkHeaders
    },
    default: {}
  },
  urlParameters: [Parameters.url, Parameters.name, Parameters.digest],
  headerParameters: [Parameters.accept2, Parameters.range],
  serializer
};
const checkChunkOperationSpec: coreHttp.OperationSpec = {
  path: "/v2/{name}/blobs/{digest}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.BlobCheckChunkHeaders
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  urlParameters: [Parameters.url, Parameters.name, Parameters.digest],
  headerParameters: [Parameters.accept, Parameters.range],
  serializer
};