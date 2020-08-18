/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  discriminators,
  AddDataFlowToDebugSessionResponse,
  AmazonMWSLinkedService,
  AmazonMWSObjectDataset,
  AmazonRedshiftLinkedService,
  AmazonRedshiftTableDataset,
  AmazonS3Dataset,
  AmazonS3LinkedService,
  AmazonS3Location,
  AvroDataset,
  AvroFormat,
  AzPowerShellSetup,
  AzureBatchLinkedService,
  AzureBlobDataset,
  AzureBlobFSDataset,
  AzureBlobFSLinkedService,
  AzureBlobFSLocation,
  AzureBlobStorageLinkedService,
  AzureBlobStorageLocation,
  AzureDatabricksLinkedService,
  AzureDataExplorerLinkedService,
  AzureDataExplorerTableDataset,
  AzureDataLakeAnalyticsLinkedService,
  AzureDataLakeStoreDataset,
  AzureDataLakeStoreLinkedService,
  AzureDataLakeStoreLocation,
  AzureFileStorageLinkedService,
  AzureFileStorageLocation,
  AzureFunctionLinkedService,
  AzureKeyVaultLinkedService,
  AzureKeyVaultSecretReference,
  AzureMariaDBLinkedService,
  AzureMariaDBTableDataset,
  AzureMLLinkedService,
  AzureMLServiceLinkedService,
  AzureMySqlLinkedService,
  AzureMySqlTableDataset,
  AzurePostgreSqlLinkedService,
  AzurePostgreSqlTableDataset,
  AzureSearchIndexDataset,
  AzureSearchLinkedService,
  AzureSqlDatabaseLinkedService,
  AzureSqlDWLinkedService,
  AzureSqlDWTableDataset,
  AzureSqlMILinkedService,
  AzureSqlMITableDataset,
  AzureSqlTableDataset,
  AzureStorageLinkedService,
  AzureTableDataset,
  AzureTableStorageLinkedService,
  BinaryDataset,
  CassandraLinkedService,
  CassandraTableDataset,
  CloudError,
  CmdkeySetup,
  CommonDataServiceForAppsEntityDataset,
  CommonDataServiceForAppsLinkedService,
  ComponentSetup,
  ConcurLinkedService,
  ConcurObjectDataset,
  CosmosDbLinkedService,
  CosmosDbMongoDbApiCollectionDataset,
  CosmosDbMongoDbApiLinkedService,
  CosmosDbSqlApiCollectionDataset,
  CouchbaseLinkedService,
  CouchbaseTableDataset,
  CreateDataFlowDebugSessionRequest,
  CreateDataFlowDebugSessionResponse,
  CustomDataset,
  CustomDataSourceLinkedService,
  CustomSetupBase,
  DataFlow,
  DataFlowDebugCommandPayload,
  DataFlowDebugCommandRequest,
  DataFlowDebugCommandResponse,
  DataFlowDebugPackage,
  DataFlowDebugPackageDebugSettings,
  DataFlowDebugResource,
  DataFlowDebugSessionCreateHeaders,
  DataFlowDebugSessionExecuteCommandHeaders,
  DataFlowDebugSessionInfo,
  DataFlowFolder,
  DataFlowSink,
  DataFlowSource,
  DataFlowSourceSetting,
  DataFlowStagingInfo,
  Dataset,
  DatasetBZip2Compression,
  DatasetCompression,
  DatasetDebugResource,
  DatasetDeflateCompression,
  DatasetFolder,
  DatasetGZipCompression,
  DatasetLocation,
  DatasetReference,
  DatasetStorageFormat,
  DatasetZipDeflateCompression,
  Db2LinkedService,
  Db2TableDataset,
  DeleteDataFlowDebugSessionRequest,
  DelimitedTextDataset,
  DocumentDbCollectionDataset,
  DrillLinkedService,
  DrillTableDataset,
  DynamicsAXLinkedService,
  DynamicsAXResourceDataset,
  DynamicsCrmEntityDataset,
  DynamicsCrmLinkedService,
  DynamicsEntityDataset,
  DynamicsLinkedService,
  EloquaLinkedService,
  EloquaObjectDataset,
  EntityReference,
  EnvironmentVariableSetup,
  ExcelDataset,
  FileServerLinkedService,
  FileServerLocation,
  FileShareDataset,
  FtpServerLinkedService,
  FtpServerLocation,
  GoogleAdWordsLinkedService,
  GoogleAdWordsObjectDataset,
  GoogleBigQueryLinkedService,
  GoogleBigQueryObjectDataset,
  GoogleCloudStorageLinkedService,
  GoogleCloudStorageLocation,
  GreenplumLinkedService,
  GreenplumTableDataset,
  HBaseLinkedService,
  HBaseObjectDataset,
  HdfsLinkedService,
  HdfsLocation,
  HDInsightLinkedService,
  HDInsightOnDemandLinkedService,
  HiveLinkedService,
  HiveObjectDataset,
  HttpDataset,
  HttpLinkedService,
  HttpServerLocation,
  HubspotLinkedService,
  HubspotObjectDataset,
  ImpalaLinkedService,
  ImpalaObjectDataset,
  InformixLinkedService,
  InformixTableDataset,
  IntegrationRuntime,
  IntegrationRuntimeComputeProperties,
  IntegrationRuntimeCustomSetupScriptProperties,
  IntegrationRuntimeDataFlowProperties,
  IntegrationRuntimeDataProxyProperties,
  IntegrationRuntimeDebugResource,
  IntegrationRuntimeReference,
  IntegrationRuntimeSsisCatalogInfo,
  IntegrationRuntimeSsisProperties,
  IntegrationRuntimeVNetProperties,
  JiraLinkedService,
  JiraObjectDataset,
  JsonDataset,
  JsonFormat,
  LinkedIntegrationRuntimeKeyAuthorization,
  LinkedIntegrationRuntimeRbacAuthorization,
  LinkedIntegrationRuntimeType,
  LinkedService,
  LinkedServiceDebugResource,
  LinkedServiceReference,
  MagentoLinkedService,
  MagentoObjectDataset,
  ManagedIntegrationRuntime,
  MappingDataFlow,
  MariaDBLinkedService,
  MariaDBTableDataset,
  MarketoLinkedService,
  MarketoObjectDataset,
  MicrosoftAccessLinkedService,
  MicrosoftAccessTableDataset,
  MongoDbCollectionDataset,
  MongoDbLinkedService,
  MongoDbV2CollectionDataset,
  MongoDbV2LinkedService,
  MySqlLinkedService,
  MySqlTableDataset,
  NetezzaLinkedService,
  NetezzaTableDataset,
  ODataLinkedService,
  ODataResourceDataset,
  OdbcLinkedService,
  OdbcTableDataset,
  Office365Dataset,
  Office365LinkedService,
  OracleLinkedService,
  OracleServiceCloudLinkedService,
  OracleServiceCloudObjectDataset,
  OracleTableDataset,
  OrcDataset,
  OrcFormat,
  PackageStore,
  ParameterSpecification,
  ParquetDataset,
  ParquetFormat,
  PaypalLinkedService,
  PaypalObjectDataset,
  PhoenixLinkedService,
  PhoenixObjectDataset,
  PostgreSqlLinkedService,
  PostgreSqlTableDataset,
  PrestoLinkedService,
  PrestoObjectDataset,
  QueryDataFlowDebugSessionsResponse,
  QuickBooksLinkedService,
  QuickBooksObjectDataset,
  RelationalTableDataset,
  ResponsysLinkedService,
  ResponsysObjectDataset,
  RestResourceDataset,
  RestServiceLinkedService,
  SalesforceLinkedService,
  SalesforceMarketingCloudLinkedService,
  SalesforceMarketingCloudObjectDataset,
  SalesforceObjectDataset,
  SalesforceServiceCloudLinkedService,
  SalesforceServiceCloudObjectDataset,
  SapBwCubeDataset,
  SapBWLinkedService,
  SapCloudForCustomerLinkedService,
  SapCloudForCustomerResourceDataset,
  SapEccLinkedService,
  SapEccResourceDataset,
  SapHanaLinkedService,
  SapHanaTableDataset,
  SapOpenHubLinkedService,
  SapOpenHubTableDataset,
  SapTableLinkedService,
  SapTableResourceDataset,
  ScriptAction,
  SecretBase,
  SecureString,
  SelfHostedIntegrationRuntime,
  ServiceNowLinkedService,
  ServiceNowObjectDataset,
  SftpLocation,
  SftpServerLinkedService,
  SharePointOnlineListLinkedService,
  SharePointOnlineListResourceDataset,
  ShopifyLinkedService,
  ShopifyObjectDataset,
  SnowflakeDataset,
  SnowflakeLinkedService,
  SparkLinkedService,
  SparkObjectDataset,
  SqlServerLinkedService,
  SqlServerTableDataset,
  SquareLinkedService,
  SquareObjectDataset,
  SubResourceDebugResource,
  SybaseLinkedService,
  SybaseTableDataset,
  TeradataLinkedService,
  TeradataTableDataset,
  TextFormat,
  Transformation,
  VerticaLinkedService,
  VerticaTableDataset,
  WebAnonymousAuthentication,
  WebBasicAuthentication,
  WebClientCertificateAuthentication,
  WebLinkedService,
  WebLinkedServiceTypeProperties,
  WebTableDataset,
  XeroLinkedService,
  XeroObjectDataset,
  XmlDataset,
  ZohoLinkedService,
  ZohoObjectDataset
} from "../models/mappers";