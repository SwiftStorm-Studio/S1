import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun main() {
    embeddedServer(Netty, port = 8081) {
        install(ContentNegotiation) {
            json()
        }

        routing {
            routing {
                get("/") {
                    val response = mapOf(
                        "message" to "Lars API. Using Ktor/Netty with Kotlin."
                    )
                    call.respond(response)
                }
            }
        }
    }.start(wait = true)
}