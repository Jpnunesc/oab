#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
#WORKDIR /app
#EXPOSE 80
#
#FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
#WORKDIR /src
#COPY ["Api/Api.csproj", "Api/"]
#COPY ["Business/Business.csproj", "Business/"]
#COPY ["Domain/Domain.csproj", "Domain/"]
#COPY ["CrossCuttingIoC/CrossCuttingIoC.csproj", "CrossCuttingIoC/"]
#COPY ["Infra/Infra.csproj", "Infra/"]
#RUN dotnet restore "Api/Api.csproj"
#COPY . .
#WORKDIR "/src/Api"
#RUN dotnet build "Api.csproj" -c Release -o /app/build
#
#FROM build AS publish
#RUN dotnet publish "Api.csproj" -c Release -o /app/publish
#
#FROM base AS final
#WORKDIR /app
#COPY --from=publish /app/publish .
#ENTRYPOINT ["dotnet", "Api.dll"]

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env
WORKDIR /app

# Copy the csproj and restore all of the nugets
COPY ["Api/Api.csproj", "Api/"]
COPY ["Business/Business.csproj", "Business/"]
COPY ["Domain/Domain.csproj", "Domain/"]
COPY ["CrossCuttingIoC/CrossCuttingIoC.csproj", "CrossCuttingIoC/"]
COPY ["Infra/Infra.csproj", "Infra/"]
RUN dotnet restore "Api/Api.csproj"

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/sdk:5.0
WORKDIR /app
EXPOSE 81
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "Api.dll"]