/**
 * This is an example CodeQL query for TypeScript
 * @name Find all functions
 * @kind problem
 * @problem.severity warning
 * @id typescript/example/find-all-functions
 */

 import javascript

 from Function f
 where f.getFile().getExtension() = "ts"
 select f, "This is a TypeScript function."