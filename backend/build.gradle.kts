plugins {
    kotlin("jvm") version "2.0.20"
    id("io.ktor.plugin") version "3.0.0-rc-1"
    kotlin("plugin.serialization") version "2.0.20"
    application
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.ktor:ktor-server-core:3.0.0-3c-1")
    implementation("io.ktor:ktor-server-netty:3.0.0-3c-1")
    implementation("io.ktor:ktor-server-content-negotiation:3.0.0-3c-1")
    implementation("io.ktor:ktor-serialization-kotlinx-json:3.0.0-3c-1")
}

application {
    mainClass.set("ApplicationKt")
}