import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun main() {
    embeddedServer(Netty, port = 8080) {
        routing {
            get("/") {
                call.respondText("API Root - Welcome to api.rk4z.net!", ContentType.Text.Plain)
            }

            route("/v1") {
                get("/greet") {
                    call.respond(mapOf("message" to "Hello from Kotlin Ktor API!"))
                }
            }
        }
    }.start(wait = true)
}