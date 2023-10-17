#include <v8.h>

using namespace v8;

int main() {
    // Initialize V8.
    V8::InitializeICUDefaultLocation("./");  // Path to the ICU data file (used for internationalization support).
    V8::InitializeExternalStartupData("./");  // Path to V8's startup data file.

    // Create a new Isolate.
    Isolate* isolate = Isolate::New();

    {
        // Create a scope for our JavaScript execution.
        Isolate::Scope isolate_scope(isolate);
        HandleScope handle_scope(isolate);

        // Create a new context.
        Local<Context> context = Context::New(isolate);

        // Enter the context for compiling and running the script.
        Context::Scope context_scope(context);

        // Define a simple JavaScript function.
        const char* jsSource = "function add(a, b) { return a + b; }";
        
        // Compile the JavaScript source code.
        Local<Script> script = Script::Compile(context, String::NewFromUtf8(isolate, jsSource).ToLocalChecked());

        // Run the script.
        Local<Value> result = script->Run(context).ToLocalChecked();

        // Call the JavaScript function and print the result.
        Local<String> processName = String::NewFromUtf8(isolate, "add").ToLocalChecked();
        Local<Value> processVal = context->Global()->Get(processName);
        Local<Function> processFun = Local<Function>::Cast(processVal);

        Local<Value> args[2] = { Integer::New(isolate, 3), Integer::New(isolate, 4) };
        Local<Value> jsResult = processFun->Call(context, context->Global(), 2, args).ToLocalChecked();

        // Print the result.
        String::Utf8Value utf8(jsResult);
        printf("Result of add(3, 4): %s\n", *utf8);
    }

    // Dispose the isolate and tear down V8.
    isolate->Dispose();

    return 0;
}
