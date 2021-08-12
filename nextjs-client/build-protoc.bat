@REM JavaScript code generation
./node_modules/.bin/grpc_tools_node_protoc --plugin=protoc-gen-grpc=D:/Projects/Job/nextjs-java-grpc/nextjs-client/node_modules/.bin/grpc_tools_node_protoc_plugin.cmd --js_out=import_style=commonjs,binary:./src/proto --grpc_out=./src/proto -I ../protos helloworld.proto
&&
@REM TypeScript code generation
./node_modules/.bin/grpc_tools_node_protoc --plugin=protoc-gen-ts=D:/Projects/Job/nextjs-java-grpc/nextjs-client/node_modules/.bin/protoc-gen-ts.cmd --ts_out=./src/proto -I ../protos helloworld.proto